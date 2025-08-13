import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BookGenre } from "../enums/BookGenre";

@Schema({timestamps: true})
export class Author {
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

export type AuthorDocument = Author & Document
export const AuthorSchema = SchemaFactory.createForClass(Author);