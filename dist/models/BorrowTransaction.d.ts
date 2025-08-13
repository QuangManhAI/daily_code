import { IBook } from "../interfaces/IBook";
import { IBorrower } from "../interfaces/IBorrower";
import { IBorrowTransaction } from "../interfaces/IBorrowTransaction";
export declare class BorrowTransaction implements IBorrowTransaction {
    readonly id: string;
    protected borrower: IBorrower;
    protected book: IBook;
    protected borrowDate: Date;
    protected dueDate: Date;
    protected returnDate?: (Date | null) | undefined;
    constructor(id: string, borrower: IBorrower, book: IBook, borrowDate: Date, dueDate: Date, returnDate?: (Date | null) | undefined);
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
//# sourceMappingURL=BorrowTransaction.d.ts.map