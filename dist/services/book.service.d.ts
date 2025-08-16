import { BookRepository } from "../repositories/book.repository";
import { IBook } from "../interfaces/IBook";
export declare class BookService {
    private readonly bookRepo;
    constructor(bookRepo: BookRepository);
    create(book: IBook): Promise<import("../schemas/book.schema").BookDocument>;
    getAll(): Promise<import("../schemas/book.schema").BookDocument[]>;
    getById(id: string): Promise<import("../schemas/book.schema").BookDocument | null>;
    update(id: string, data: Partial<IBook>): Promise<import("../schemas/book.schema").BookDocument | null>;
    delete(id: string): Promise<import("../schemas/book.schema").BookDocument | null>;
}
//# sourceMappingURL=book.service.d.ts.map