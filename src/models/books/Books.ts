import type { BookGenre } from "../../enums/BookGenre";
import type { IBook } from "../../interfaces/IBook";

export abstract class Book implements IBook {
    constructor(
        public readonly id: string,
        protected title: string,
        protected author: string,
        protected year: number,
        protected genre: BookGenre,
        protected totalCopies: number,
        protected availableCopies: number,
    ){}

    getId(): string {
        return this.id;
    }

    getAuthor(): string {
        return this.author;
    }

    getAvailableCopies(): number {
        return this.availableCopies;
    }

    getGenre(): BookGenre {
        return this.genre;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(_title: string): void {
        this.title = _title;
    }

    setAvailableCopies(count: number): void {
        if (count < 0 || count > this.totalCopies) {
            throw new Error("Invalid values!")
        }
        this.availableCopies = count;
    }

    borrowCopy(): void {
        if (this.availableCopies <= 0) {
            throw new Error("No availableCopies!");
        }
        this.availableCopies--;
    }

    returnCopy(): void {
        if (this.availableCopies < this.totalCopies) {
            this.availableCopies++;
        }
    }
}