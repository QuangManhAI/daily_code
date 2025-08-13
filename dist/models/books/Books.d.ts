import type { BookGenre } from "../../enums/BookGenre";
import type { IBook } from "../../interfaces/IBook";
export declare abstract class Book implements IBook {
    readonly id: string;
    protected title: string;
    protected author: string;
    protected year: number;
    protected genre: BookGenre;
    protected totalCopies: number;
    protected availableCopies: number;
    constructor(id: string, title: string, author: string, year: number, genre: BookGenre, totalCopies: number, availableCopies: number);
    getId(): string;
    getAuthor(): string;
    getAvailableCopies(): number;
    getGenre(): BookGenre;
    getTitle(): string;
    setTitle(_title: string): void;
    setAvailableCopies(count: number): void;
    borrowCopy(): void;
    returnCopy(): void;
}
//# sourceMappingURL=Books.d.ts.map