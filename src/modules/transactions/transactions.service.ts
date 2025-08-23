import { Injectable, NotFoundException, BadRequestException, Inject } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { BorrowTransaction, BorrowTransactionDocument } from '../../models/borrow-transaction.schema';
import { BookCopy, BookCopyDocument } from '../../models/books/book-copies.schema';
import { TxStatus } from '../../enums/TxStatus';
import { CopyStatus } from '../../enums/CopyStatus';
import { BorrowCopyDto } from './dto/borrow-copy.dto';
import { ReturnCopyDto } from './dto/return-copy.dto';
import { FINE_POLICY, IFinePolicy } from './ports/fine.policy';
import { CLOCK, IClock } from './ports/clock';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(BorrowTransaction.name)
    private readonly txModel: Model<BorrowTransactionDocument>,
    @InjectModel(BookCopy.name)
    private readonly copyModel: Model<BookCopyDocument>,
    @InjectConnection()
    private readonly conn: Connection,
    @Inject(FINE_POLICY)
    private readonly finePolicy: IFinePolicy,
    @Inject(CLOCK)
    private readonly clock: IClock,
  ) {}

  async borrowerCopy(dto: BorrowCopyDto) {
    const session = await this.conn.startSession();
    session.startTransaction();
    try {
      const lockedCopy = await this.copyModel.findOneAndUpdate(
        { _id: dto.bookCopy, library: dto.library, status: CopyStatus.AVAIABLE }, 
        { $set: { status: CopyStatus.BORROWED } },
        { new: true, session },
      );
      if (!lockedCopy) {
        throw new BadRequestException('Copy is not avalable at this library');
      }

      const tx = await this.txModel.create(
        [
          {
            borrower: dto.borrower,
            bookCopy: dto.bookCopy,
            library: dto.library,
            borrowDate: new Date(dto.borrowDate),
            dueDate: new Date(dto.dueDate),
            status: TxStatus.BORROWED,
          },
        ],
        { session },
      );

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
      const tx = await this.txModel
        .findOne({ _id: dto.transactionId, status: TxStatus.BORROWED })
        .session(session);
      if (!tx) throw new NotFoundException('Active transaction not found');

      const now = dto.returnDate ? new Date(dto.returnDate) : this.clock.now();
      const fine = this.finePolicy.computeFine(tx.dueDate, now);

      tx.returnDate = now;
      tx.status = TxStatus.RETURNED;
      tx.fineTotal = fine;
      await tx.save({ session });

      await this.copyModel.updateOne(
        { _id: tx.bookCopy },
        { $set: { status: CopyStatus.AVAIABLE } }, 
        { session },
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
      const tx = await this.txModel
        .findOne({ _id: transactionId, status: TxStatus.BORROWED })
        .session(session);

      if (!tx) throw new NotFoundException('Active transaction not found');

      tx.status = TxStatus.LOST;
      await tx.save({ session });

      await this.copyModel.updateOne(
        { _id: tx.bookCopy },
        { $set: { status: CopyStatus.LOST } },
        { session },
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
}