import type { IBook } from "./IBook";
import type { IBorrower } from "./IBorrower";
export interface ILibrary {
    addBook(book: IBook): Promise<void>;
    removeBooke(bookId: string): Promise<void>;
    searchBookByTitle(title: string): Promise<IBook[]>;
    searchBookByGenre(genre: string): Promise<IBook[]>;
    addBorrower(borrower: IBorrower): Promise<void>;
    removeBorrower(borrower: IBorrower): Promise<void>;
    borrowBook(borrowerId: string, bookId: string): Promise<void>;
    returnBook(borrowerId: string, bookId: string): Promise<void>;
    listBorrowedBooks(): Promise<IBook[]>;
    listOverdueBorrowers(): Promise<IBorrower[]>;
}
//# sourceMappingURL=ILibrary.d.ts.map