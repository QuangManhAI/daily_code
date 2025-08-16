import type { ITimeStamps, ObjectIdString } from "./common";
import { CopyStatus } from "../enums/CopyStatus";

export interface IBookCopy extends ITimeStamps{
    _id?: ObjectIdString;
    book: ObjectIdString;
    library: ObjectIdString;

    barcode: string;
    status: CopyStatus;
}