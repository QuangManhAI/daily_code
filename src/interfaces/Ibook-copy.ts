import type { ITimestamps, ObjectIdString } from "./common";
import { CopyStatus } from "../enums/CopyStatus";

export interface IBookCopy extends ITimestamps{
    _id?: ObjectIdString;
    book: ObjectIdString;
    library: ObjectIdString;

    barcode: string;
    status: CopyStatus;
}