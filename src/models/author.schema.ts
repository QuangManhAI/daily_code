import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { BookGenre, IAuthor } from "../interfaces";

@Schema({timestamps: true, collection: 'authors'})
export class Author implements IAuthor{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;

    @Prop({required: true, trim: true})
    name!: string;

    @Prop() biography?: string;
    @Prop() nationality?: string;
    @Prop() birthDate?: Date;
    @Prop() deathDate?: Date;

    @Prop({type: [String], enum: Object.values(BookGenre),
        default: []
    })
    genres?: BookGenre[];

    @Prop({type: [String], default: []})
    awards?: string[];
}

export type AuthorDocument = HydratedDocument<Author>;
export const AuthorSchemas = SchemaFactory.createForClass(Author);

AuthorSchemas.index({name: 'text', nationality: 'text'});