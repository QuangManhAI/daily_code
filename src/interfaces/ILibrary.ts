import type { BookGenre } from "../enums/BookGenre";
import type { IBook } from "./IBook";
import type { IBorrower } from "./IBorrower";

export interface ILibrary {
    // book manngemnet
    addBook(book: IBook): Promise<void>;
    removeBooke(bookId: string): Promise<void>;
    searchBookByTitle(title: string): Promise<IBook[]>;
    searchBookByGenre(genre: string): Promise<IBook[]>;
    
    // book managment
    addBorrower(borrower: IBorrower): Promise<void>;
    removeBorrower(borrower: IBorrower): Promise<void>;

    // Transactions
    borrowBook(borrowerId: string, bookId: string): Promise<void>;
    returnBook(borrowerId: string, bookId: string): Promise<void>;

    // Reports
    listBorrowedBooks(): Promise<IBook[]>;
    listOverdueBorrowers(): Promise<IBorrower[]>;
}