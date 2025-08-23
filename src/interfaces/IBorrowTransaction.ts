import type { ITimestamps, ObjectIdString } from "./common";
import type { TxStatus } from "../enums/TxStatus";

export interface IBorrowTransaction extends ITimestamps{
    _id?: ObjectIdString;
    borrower: ObjectIdString;
    bookCopy: ObjectIdString;
    library: ObjectIdString;
    borrowDate: Date;

    dueDate: Date;
    returnDate?: Date | null;
    status: TxStatus;

    fineTotal?: number;
}