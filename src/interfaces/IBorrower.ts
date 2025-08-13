// interface cho người mượn kế thừa từ người dùng

import type { IUser } from "./IUser";
import type { IBook } from "./IBook";
import type { Status } from "../enums/Status";
export interface IBorrower extends IUser {
    borrowedBooks: IBook[];
    borrowDate: Date;
    endRentDate: Date;
    Status: Status;
    borrowHistory?: {
        bookId: string;
        dateBorrow: Date;
        dateReturn?: Date;
    }[];
}