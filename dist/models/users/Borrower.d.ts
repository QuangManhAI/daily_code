import type { IBook } from "../../interfaces/IBook";
import { User } from "./User";
import { Gender } from "../../enums/Gender";
import { Role } from "../../enums/Roles";
export declare class Borrower extends User {
    private borrowedBooks;
    constructor(id: string, name: string, age: number, role: Role, gender?: Gender, address?: string, email?: string);
    getBorroweddBook(): IBook[];
    borrowBook(book: IBook): void;
    returnBook(bookId: string): void;
}
//# sourceMappingURL=Borrower.d.ts.map