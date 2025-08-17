import type { BookGenre } from "../enums/BookGenre";
import type { ITimestamps, ObjectIdString } from "./common";

export interface IAuthor extends ITimestamps {
    _id?: ObjectIdString;
    name: string;
    biography?: string;
    nationality?: string;
    birthDate?: Date;
    deathDate?: Date;
    genres?: BookGenre[];
    awards?: string[];
}