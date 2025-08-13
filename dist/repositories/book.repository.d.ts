import { Model } from "mongoose";
import { BookDocument } from "../schemas/book.schema";
import { IBook } from "../interfaces/IBook";
export declare class BookRepository {
    private readonly bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(book: IBook): Promise<BookDocument>;
    findById(id: string): Promise<BookDocument | null>;
    findAll(): Promise<BookDocument[]>;
    update(id: string, updateData: Partial<IBook>): Promise<BookDocument | null>;
    delete(id: string): Promise<BookDocument | null>;
}
//# sourceMappingURL=book.repository.d.ts.map