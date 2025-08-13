import type { BookGenre } from "../../enums/BookGenre";
import { Book } from "./Books";
export declare class FictionBook extends Book {
    private chapters;
    private series?;
    constructor(id: string, title: string, author: string, year: number, genre: BookGenre, totalCopies: number, availableCopies: number, chapters: number, series?: string | undefined);
    getChapters(): number;
    getSeries(): string | undefined;
    setSeries(_series: string): void;
    getTitle(): string;
}
//# sourceMappingURL=FictionBook.d.ts.map