import { Document } from "mongoose";
import { BookGenre } from "../enums/BookGenre";
export declare class Author {
    name: string;
    biography?: string;
    nationlity?: string;
    birthdate?: Date;
    genres?: BookGenre[];
    books?: string[];
    awards?: string[];
}
export type AuthorDocument = Author & Document;
export declare const AuthorSchema: import("mongoose").Schema<Author, import("mongoose").Model<Author, any, any, any, Document<unknown, any, Author, any, {}> & Author & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Author, Document<unknown, {}, import("mongoose").FlatRecord<Author>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Author> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=author.schema.d.ts.map