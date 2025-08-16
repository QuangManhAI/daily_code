import type { BookGenre } from "../enums/BookGenre";
import type { ITimeStamps, ObjectIdString } from "./common";

export interface IAuthor extends ITimeStamps {
    _id?: ObjectIdString;
    name: string;
    biography?: string;
    nationlity?: string;
    birthDate?: Date;
    deathDate?: Date;
    genres?: BookGenre[];
    awards?: string[];
}