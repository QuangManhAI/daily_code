import { IBook } from "./IBook";
import { IBorrower } from "./IBorrower";
export interface IBorrowTransaction {
    getId(): string;
    getBorrower(): IBorrower;
    setBorrower(_borrower: IBorrower): void;
    getBook(): IBook;
    setBook(_book: IBook): void;
    getBorrowDate(): Date;
    setBorrowDate(_borrowdate: Date): void;
    getDueDate(): Date;
    setDueDate(_duedate: Date): void;
    getReturnDate(): Date | null | undefined;
    setReturnDate(date: Date): void;
    isReturned(): boolean;
    isOverDue(currentDate?: Date): boolean;
    getOverdueDays(currentDate?: Date): number;
    calculateFine(finePerDay?: number, currentDate?: Date): number;
    markReturned(_returnDate?: Date): void;
}
//# sourceMappingURL=IBorrowTransaction.d.ts.map