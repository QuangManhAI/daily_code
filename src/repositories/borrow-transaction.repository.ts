import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BorrowTransactionDocument } from '../schemas/borow-transaction.schema';
import { IBorrowTransaction } from '../interfaces/IBorrowTransaction';
@Injectable()
export class BorrowTransactionRepository{
    constructor(
        @InjectModel('BorrowTransaction')
        private readonly borrowTransactionModel: Model<BorrowTransactionDocument>
    ) {}

    async create(data: Partial<IBorrowTransaction>): Promise<BorrowTransactionDocument> {
    return this.borrowTransactionModel.create(data);        
    }

    async findAll(): Promise<BorrowTransactionDocument[]> {
        return this.borrowTransactionModel.find().populate('borrowerId').populate('bookId').exec();
    }

    async findById(id: string): Promise<BorrowTransactionDocument | null> {
        return this.borrowTransactionModel.findById(id).populate('borrowerId').populate('bookId').exec();
    }

    async update(id: string, data: Partial<IBorrowTransaction>):Promise<BorrowTransactionDocument | null> {
        return this.borrowTransactionModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async delete(id: string): Promise<BorrowTransactionDocument | null> {
        return this.borrowTransactionModel.findByIdAndDelete(id).exec();
    }

    async findActiveByBorrower(borrowerId: string): Promise<BorrowTransactionDocument[]> {
        return this.borrowTransactionModel.find({
            borrwerId: new Types.ObjectId(borrowerId),
            isReturned: false,
        }) 
        .populate('bookId')
        .exec();
    }
}