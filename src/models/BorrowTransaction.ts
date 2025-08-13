import { IBook } from "../interfaces/IBook";
import { IBorrower } from "../interfaces/IBorrower";
import { IBorrowTransaction } from "../interfaces/IBorrowTransaction";

export class BorrowTransaction implements IBorrowTransaction {
    constructor(
        public readonly id: string,
        protected borrower: IBorrower,
        protected book: IBook,
        protected borrowDate: Date,
        protected dueDate: Date,
        protected returnDate?: Date | null
    ){}

        getId(): string {
        return this.id;
    }

    getBorrower(): IBorrower {
        return this.borrower;
    }

    setBorrower(_borrower: IBorrower): void {
        this.borrower = _borrower;
    }

    getBook(): IBook {
        return this.book;
    }

    setBook(_book: IBook): void {
        this.book = _book;
    }

    getBorrowDate(): Date {
        return this.borrowDate;
    }

    setBorrowDate(_borrowdate: Date): void {
        this.borrowDate = _borrowdate;
    }

    getDueDate(): Date {
        return this.dueDate;
    }

    setDueDate(_duedate: Date): void {
        this.borrowDate = _duedate;
    }

    getReturnDate(): Date | null | undefined {
        return this.returnDate;
    }

    setReturnDate(date: Date): void {
        this.returnDate = date;
    }

    isReturned(): boolean {
        return this.returnDate !== null;
    }

    isOverDue(currentDate: Date = new Date()): boolean{
        if (this.isReturned()) {
            return this.returnDate! > this.dueDate;
        }
        return currentDate > this.dueDate;
    }

    getOverdueDays(currentDate: Date = new Date()): number {
        if (!this.isOverDue(currentDate)) return 0;

        const endDate = this.isReturned() ? this.returnDate! : currentDate;
        const diffMs = endDate.getTime() - this.dueDate.getTime();
        return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    }

    calculateFine(finePerDay: number = 1000, currentDate: Date = new Date()): number {
        return this.getOverdueDays(currentDate) * finePerDay;        
    }

    markReturned(_returnDate: Date = new Date()): void {
        this.returnDate = _returnDate;
    }
    
}