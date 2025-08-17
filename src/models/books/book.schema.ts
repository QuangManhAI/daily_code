import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { BookGenre } from "../../enums/BookGenre";
import { IBook } from "../../interfaces/IBook";

@Schema({timestamps: true, collection: 'books'})
export class Book implements IBook{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    
    @Prop({required: true, trim: true})
    title!: string;

    @Prop({type: Types.ObjectId, ref: 'Author', required: true,
        index: true
    })
    author!: string;

    @Prop({type: [String], enum: Object.values(BookGenre),
        default: []
    })
    genres!: BookGenre[];

    @Prop({unique: true, sparse: true})
    isbn?: string;

    @Prop() publishedYear?: number;

    @Prop({default: 0, min: 0})
    totalCopies?: number;
}

export type BookDocument = HydratedDocument<Book>;
export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.index({title : 'text'});
BookSchema.index({author: 1, title: 1});