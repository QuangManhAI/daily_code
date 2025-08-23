import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BorrowTransaction, BorrowTransactionSchema } from "../../models/borrow-transaction.schema";
import { BookCopy, BookCopySchema } from "../../models/books/book-copies.schema";
import { TransactionsController } from "./transactions.controller";
import { TransactionsService } from "./transactions.service";
import { FINE_POLICY } from "./ports/fine.policy";
import { DefaultFinePolicy } from "./ports/default-fine.policy";
import { CLOCK, SystemClock } from "./ports/clock";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BorrowTransaction.name, schema: BorrowTransactionSchema },
      { name: BookCopy.name, schema: BookCopySchema },
    ]),
  ],
  providers: [
    TransactionsService,
    { provide: FINE_POLICY, useFactory: () => new DefaultFinePolicy(5000) },
    { provide: CLOCK, useClass: SystemClock },
  ],
  controllers: [TransactionsController],
  exports: [TransactionsService],
})
export class TransactionsModule {}