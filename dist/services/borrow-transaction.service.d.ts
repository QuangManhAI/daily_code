import { BorrowTransactionRepository } from "../repositories/borrow-transaction.repository";
import { IBorrowTransaction } from "../interfaces/IBorrowTransaction";
export declare class BorrowTransactionService {
    private readonly borrowRepo;
    constructor(borrowRepo: BorrowTransactionRepository);
    create(transaction: IBorrowTransaction): Promise<import("../schemas/borow-transaction.schema").BorrowTransactionDocument>;
    getAll(): Promise<import("../schemas/borow-transaction.schema").BorrowTransactionDocument[]>;
    getById(id: string): Promise<import("../schemas/borow-transaction.schema").BorrowTransactionDocument | null>;
    update(id: string, data: Partial<IBorrowTransaction>): Promise<import("../schemas/borow-transaction.schema").BorrowTransactionDocument | null>;
    delete(id: string): Promise<import("../schemas/borow-transaction.schema").BorrowTransactionDocument | null>;
}
//# sourceMappingURL=borrow-transaction.service.d.ts.map