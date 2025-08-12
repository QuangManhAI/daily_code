import type { BookGenre } from "../enums/BookGenre";

export interface IBook {
    getId(): string;
    getTitle(): string;
    getAuthor(): string;
    getGenre(): BookGenre;
    getAvailableCopies(): number;

    setTitle(_title: string): void;
    setAvailableCopies(count: number): void;
}