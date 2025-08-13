import type { BookGenre } from "../../enums/BookGenre";
import { Book } from "./Books";
export declare class NonFictionBook extends Book {
    private subject;
    private researchField?;
    constructor(id: string, title: string, author: string, year: number, genre: BookGenre, totalCopies: number, availableCopies: number, subject: string, researchField?: string | undefined);
    getSubject(): string;
    setSubject(_subject: string): void;
    getResearchField(): string | undefined;
    setResearchField(field: string): void;
    getTitle(): string;
}
//# sourceMappingURL=NonFictionBook.d.ts.map