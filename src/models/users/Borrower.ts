

import type { IBook } from "../../interfaces/IBook";
import { User } from "./User";
import { Gender } from "../../enums/Gender";
import { Role } from "../../enums/Roles";

export class Borrower extends User {
    private borrowedBooks: IBook[] = [];
    constructor(
        id: string,
        name: string,
        age: number,
        role: Role,
        gender?: Gender,
        address?: string,
        email?: string
    ){
        super(id, name, age, role, gender, address, email);
    }

    getBorroweddBook(): IBook[]  {
        return this.borrowedBooks;
    }

    borrowBook(book: IBook): void {
        this.borrowedBooks.push(book);
    }

    returnBook(bookId: string): void {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.getId() !== bookId);
    }
}