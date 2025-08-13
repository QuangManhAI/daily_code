// interface cho quản lí thư viện kế thừa tư User 

import type { IUser } from "./IUser";

export interface ILibrarian extends IUser {
    employeeId : string;
    permissions: string;
}