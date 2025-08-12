import type { BookGenre } from "../../enums/BookGenre";
import { Book } from "./Books";

export class FictionBook extends Book {
    constructor(
        id: string,
        title: string,
        author: string,
        year: number,
        genre: BookGenre,
        totalCopies: number,
        availableCopies: number,
        private chapters: number,
        private series?: string,
    ){
        super(id, title, author, year, genre, totalCopies, availableCopies);
    }

    getChapters(): number {
        return this.chapters;
    }

    getSeries(): string | undefined {
        return this.series;
    }

    setSeries(_series: string): void {
        this.series = _series;
    }

    getTitle(): string {
        return `${super.getTitle()}${this.series?` (Series: ${this.series})`: ""}`;
    }
}