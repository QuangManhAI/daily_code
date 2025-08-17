import type { ITimestamps, ObjectIdString } from "./common";


export interface ILibrary extends ITimestamps {
    _id?: ObjectIdString;
    name: string;
    address: string;
    phone: string;
    email: string;
}