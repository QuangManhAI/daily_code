import { Model } from 'mongoose';
import { BorrowTransactionDocument } from '../schemas/borow-transaction.schema';
import { IBorrowTransaction } from '../interfaces/IBorrowTransaction';
export declare class BorrowTransactionRepository {
    private readonly borrowTransactionModel;
    constructor(borrowTransactionModel: Model<BorrowTransactionDocument>);
    create(data: Partial<IBorrowTransaction>): Promise<BorrowTransactionDocument>;
    findAll(): Promise<BorrowTransactionDocument[]>;
    findById(id: string): Promise<BorrowTransactionDocument | null>;
    update(id: string, data: Partial<IBorrowTransaction>): Promise<BorrowTransactionDocument | null>;
    delete(id: string): Promise<BorrowTransactionDocument | null>;
    findActiveByBorrower(borrowerId: string): Promise<BorrowTransactionDocument[]>;
}
//# sourceMappingURL=borrow-transaction.repository.d.ts.map