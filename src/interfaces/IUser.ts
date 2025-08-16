import type { Gender } from "../enums/Gender";
import type { Role } from "../enums/Roles";
import type { ITimeStamps, ObjectIdString } from "./common";

export interface IUser extends ITimeStamps {
    _id?: ObjectIdString;
    name: string;
    email?: string;
    address?: string;
    age?: number;
    gender?:Gender;
    role: Role; 
}