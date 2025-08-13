import { Injectable } from "@nestjs/common";
import { BorrowTransactionRepository } from "../repositories/borrow-transaction.repository";
import { IBorrowTransaction } from "../interfaces/IBorrowTransaction";

@Injectable()
export class BorrowTransactionService {
    constructor(private readonly borrowRepo: BorrowTransactionRepository) {}

    async create(transaction: IBorrowTransaction) {
        return this.borrowRepo.create(transaction);
    }

    async getAll() {
        return this.borrowRepo.findAll();
    }

    async getById(id: string) {
        return this.borrowRepo.findById(id);
    }

    async update(id: string, data: Partial<IBorrowTransaction>) {
        return this.borrowRepo.update(id, data);
    }

    async delete(id: string) {
        return this.borrowRepo.delete(id);
    }
}
