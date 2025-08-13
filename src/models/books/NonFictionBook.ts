// kế thừa từ book cho nonficionbook 

import type { BookGenre } from "../../enums/BookGenre";
import { Book } from "./Books";

export class NonFictionBook extends Book {
    constructor(
        id: string,
        title: string,
        author: string,
        year: number,
        genre: BookGenre,
        totalCopies: number,
        availableCopies: number,
        private subject: string,
        private researchField?: string,
    ){
        super(id, title, author, year, genre, totalCopies, availableCopies);
    }

    getSubject(): string {
        return this.subject;
    }

    setSubject(_subject: string): void {
        this.subject = _subject;
    }

    getResearchField() {
        return this.researchField;
    }

    setResearchField(field: string): void {
        this.researchField = field;
    }

    getTitle(): string {
        const baseTilte = super.getTitle();
        return `${baseTilte} - [${this.subject}]`;
    }
}
