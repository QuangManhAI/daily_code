import type { Gender } from "../enums/Gender";
import type { Role } from "../enums/Roles";
import type { ITimestamps, ObjectIdString } from "./common";

export interface IUser extends ITimestamps {
    _id?: ObjectIdString;
    name: string;
    email?: string;
    address?: string;
    age?: number;
    gender?:Gender;
    role: Role; 
}