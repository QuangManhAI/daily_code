import { Document } from 'mongoose';
import { BookGenre } from '../enums/BookGenre';
export declare class Book {
    title: string;
    author: string;
    genre: BookGenre;
    availableCopies: number;
}
export type BookDocument = Book & Document;
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, Document<unknown, any, Book, any, {}> & Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, Document<unknown, {}, import("mongoose").FlatRecord<Book>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=book.schema.d.ts.map