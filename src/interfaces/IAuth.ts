import { Role } from "../enums/Roles";
import { ObjectIdString } from "./common";

export interface JwtPayLoad {
    sub: ObjectIdString;
    role: Role;
    email?: string;
    iat?: number;
    exp?: number
}

export interface AuthTokens {
    accessToken: string;
    refreshToken?: string;
}