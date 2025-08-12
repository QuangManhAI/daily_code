import type { IUser } from "./IUser";

export interface ILibrarian extends IUser {
    employeeId : string;
    permissions: string;
}