import type { ITimeStamps, ObjectIdString } from "./common";
import type { TxStatus } from "../enums/Txstatus";

export interface IBorrowTransaction extends ITimeStamps{
    _id?: ObjectIdString;
    borrower: ObjectIdString;
    bookCopy: ObjectIdString;
    library: ObjectIdString;
    borrowDate: Date;

    dueDate: Date;
    returnDate: Date;
    status: TxStatus;

    fineTotal: number;
}