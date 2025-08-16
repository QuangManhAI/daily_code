import type { ITimeStamps, ObjectIdString } from "./common";


export interface ILibrary extends ITimeStamps {
    _id?: ObjectIdString;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
}