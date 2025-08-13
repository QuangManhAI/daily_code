import { User } from "./User";
import { Gender } from "../../enums/Gender";
import type { IBook } from "../../interfaces/IBook";
import type { IBorrower } from "../../interfaces/IBorrower";
import { Role } from "../../enums/Roles";
export declare class Librarian extends User {
    constructor(id: string, name: string, age: number, gender?: Gender, address?: string, email?: string);
    addBook(book: IBook): void;
    remove(bookId: string): void;
    registerBorrower(borrower: IBorrower): void;
    removeBorrower(borrowerId: string): void;
    toPlain(): {
        name: string;
        age: number;
        gender: Gender | undefined;
        address: string;
        email: string | undefined;
        role: Role;
    };
}
//# sourceMappingURL=Librarian.d.ts.map