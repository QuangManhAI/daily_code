import type { BookGenre } from "../enums/BookGenre";
import type { IBook } from "./IBook";
import type { IUser } from "./IUser";

export interface IAuthor extends IUser {
    getBiography(): string | undefined;
    setBiography(_biography: string): void;

    getNationality():string | undefined;
    setNationality(_nationlity: string) : void;

    getBirthdate(): Date;
    setBirthDate(_birthdate: Date): void;

    getDeathdate(): Date | undefined;
    setDeathDate(_deathdate: Date): void;

    getGenres(): BookGenre[] | undefined;
    serGenres(_bookgenre: BookGenre[]): void;

    getBooks(): IBook[];
    setBooks(_books: IBook[]): void;

    getAwards(): string[] | undefined;
    setAwards(_awards: string[]): void;
}