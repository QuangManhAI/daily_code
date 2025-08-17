import { Role } from "../enums/Roles";
import { ITimestamps, ObjectIdString } from "./common";
import { AccountStatus } from "../enums/AccountStatus";

export interface IUserAccount extends ITimestamps {
    _id?: ObjectIdString;
    email: string;
    passwordHash: string;
    role: Role

    status: AccountStatus;
    lastLoginAt?: Date;
}