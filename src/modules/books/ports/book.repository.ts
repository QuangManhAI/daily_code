import { Book } from "../../../models/books/book.schema";
export interface IBookRepository {
    create(data: Partial<Book>): Promise<Book>;
    findAll():Promise<Book[]>;
    findById(id: string): Promise<Book|null>;
    updateById(id: string, data:Partial<Book>): Promise<Book|null>;
    deleteById(id: string): Promise<boolean>;
}

export const BOOK_REPO = Symbol("BOOK_REPO");