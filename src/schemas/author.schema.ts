// Schemas như là nới định nghĩa các trường trong document


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BookGenre } from "../enums/BookGenre";



@Schema({timestamps: true})  // đánh dấu một schema (decorator)
export class Author {

    // @Prop là định nghĩa một trường(field) schema
    @Prop({required: true})
    name!: string;

    @Prop()
    biography?: string;

    @Prop()
    nationlity?: string;

    @Prop()
    birthdate?: Date;

    @Prop({type: [String]})
    genres?: BookGenre[];

    @Prop({type: [String]})
    books?: string[];

    @Prop({type: [String]})
    awards?: string[];
}

// tạo và xuất kiểu để dùng ở repository
export type AuthorDocument = Author & Document
// tạo schema 
export const AuthorSchema = SchemaFactory.createForClass(Author);