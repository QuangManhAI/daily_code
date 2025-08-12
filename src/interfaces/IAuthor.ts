import type { BookGenre } from "../enums/BookGenre";
import type { IUser } from "./IUser";

export interface IAuthor extends IUser {
    biography?: string;
    nationality?: string;
    birthdate?: Date;
    deathDate?: Date;
    genres?: BookGenre[];
    books: string[];
    awards?: string[];
}