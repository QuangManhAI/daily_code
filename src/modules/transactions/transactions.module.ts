import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BorrowTransaction, BorrowTransactionSchema } from "../../models/borrow-transaction.schema";
import { BookCopy, BookCopySchema } from "../../models/books/book-copies.schema";
import { TransactionsController } from "./transactions.controller";
import { TransactionsService } from "./transactions.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: BorrowTransaction.name, schema: BorrowTransactionSchema},
            {name: BookCopy.name, schema: BookCopySchema},
        ]),
    ],
    providers: [TransactionsService],
    controllers: [TransactionsController],
    exports: [TransactionsService],
})
export class TransactionsModule{}