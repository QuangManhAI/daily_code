import type { ITimeStamps, ObjectIdString } from "./common";
import type { BookGenre } from "../enums/BookGenre";

export interface IBook extends ITimeStamps {
    _id?: ObjectIdString;
    title: string;
    author: ObjectIdString;
    genres: BookGenre[];
    isbn?: string;
    publishedYear?: number;

    totalCopies?: number;
}