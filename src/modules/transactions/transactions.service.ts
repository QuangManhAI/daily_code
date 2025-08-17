import {Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { BorrowTransaction, BorrowTransactionDocument } from '../../models/borrow-transaction.schema';
import { BookCopy, BookCopyDocument } from '../../models/books/book-copies.schema';
import { TxStatus } from '../../enums/Txstatus';
import { CopyStatus } from '../../enums/CopyStatus';
import { BorrowCopyDto } from './dto/borrow-copy.dto';
import { ReturnCopyDto } from './dto/return-copy.dto';

@Injectable()
export class TransactionsService {
    private readonly defaultFinePerDay = 5000;

    constructor(
        @InjectModel(BorrowTransaction.name) 
    private readonly txModel:
    Model<BorrowTransactionDocument>,
        @InjectModel(BookCopy.name) private readonly copyModel:
    Model<BookCopyDocument>,
        @InjectConnection() private readonly conn: Connection,
    ){}

    async borrowerCopy(dto: BorrowCopyDto) {
        const session = await this.conn.startSession();
        session.startTransaction();
        try {
            const lockedCopy = await this.copyModel.findOneAndUpdate({
                _id: dto.bookCopy, library: dto.library, status: CopyStatus.AVAIABLE
            }, { $set: {status: CopyStatus.BORROWED}}, {new: true, session},);
            if (!lockedCopy) {
                throw new 
                BadRequestException('Copy is not avalable at this library');
            }

            const tx = await this.txModel.create([{
                borrower: dto.borrower,
                bookCopy: dto.bookCopy,
                library: dto.library,
                borrowDate: new Date(dto.borrowDate),
                dueDate: new Date(dto.dueDate),
                status: TxStatus.BORROWED,
            }], {session });

            await session.commitTransaction();
            return tx[0]?.toObject();
        } catch (e) {
            await session.abortTransaction();
            throw e;
        } finally {
            session.endSession();
        }
    }

    async returnCopy(dto: ReturnCopyDto) {
        const session = await this.conn.startSession();
        session.startTransaction();
        try {
            const tx = await this.txModel.findOne({
                _id: dto.transactionId,
                status: TxStatus.BORROWED,
            }).session(session);
            if (!tx) throw new 
            NotFoundException ('Active transaction not found');

            const now = dto.returnDate ? new Date(dto.returnDate) : new Date();
            const finePerDay = dto.finePerDay ?? this.defaultFinePerDay;

            const overdueDays = this.calcOverdueDays(tx.dueDate, now);
            const fine = overdueDays > 0 ? overdueDays * finePerDay : 0;

            tx.returnDate = now;
            tx.status = TxStatus.RETURNED;
            tx.fineTotal = fine;
            await tx.save({ session });

            await this.copyModel.updateOne(
                {_id: tx.bookCopy},
                {$set: {status: CopyStatus.AVAIABLE}},
                {session},
            );

            await session.commitTransaction();
            return tx.toObject();
        } catch (e) {
            await session.abortTransaction();
            throw e;
        } finally {
            session.endSession();
        }
    }

    async markLost(transactionId: string) {
        const session = await this.conn.startSession();
        session.startTransaction();
        try {
            const tx = await this.txModel.findOne({
                _id: transactionId,
                status: TxStatus.BORROWED,
            }).session(session);

            if (!tx) throw new 
            NotFoundException('Active transaction not found');

            tx.status = TxStatus.LOST;
            await tx.save({session});

            await this.copyModel.updateOne({_id: tx.bookCopy}, {
                $set: {status: CopyStatus.LOST}
            }, {session},);

            await session.commitTransaction();
            return tx.toObject();
        } catch (e) {
            await session.abortTransaction();
            throw e;
        } finally {
            session.endSession();
        }
    }



    private calcOverdueDays(due: Date, returned: Date) {
        const ms = returned.getTime() - new Date(due).getTime();
        if (ms <= 0) return 0;
        return Math.ceil(ms / (24 * 60 * 60 * 1000));
    }
}
