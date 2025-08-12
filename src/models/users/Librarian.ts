import { User } from "./User";
import { Gender } from "../../enums/Gender";
import type { IBook } from "../../interfaces/IBook";
import type { IBorrower } from "../../interfaces/IBorrower";

export class Librarian extends User {
    constructor(
        id: string,
        name: string,
        age: number,
        gender?: Gender,
        address?: string,
        email?: string
    ) {
        super(id, name, age, gender, address, email);
    }

    addBook(book: IBook): void {
        console.log(`Librarian ${this.getName()} added book: ${book.getTitle()}`);
    }

    remove(bookId: string): void {
        console.log(`Librarian ${this.getName()} remove book: ${bookId}`)
    }

    registerBorrower(borrower: IBorrower): void {
        console.log(`Librarian ${this.getName()} registered borrower: ${borrower.getName()}`);
    }

    removeBorrower(borrowerId: string): void {
        console.log(`Librarian ${this.getName()} removed borrower ID: ${borrowerId}`);
    }
}