import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { CopyStatus, IBookCopy } from "../../interfaces";


@Schema({timestamps: true, collection: 'book_copies'})
export class BookCopy implements IBookCopy{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    @Prop({type: Types.ObjectId, ref: 'Book', required: true, index: true})
    book!: string

    @Prop({type: Types.ObjectId, ref: 'Library', required: true, index: true})
    library!: string;

    @Prop({required: true, unique: true, trim: true})
    barcode!: string;

    @Prop({ type: String, enum: Object.values(CopyStatus), required: true, index: true, 
        default : CopyStatus.AVAIABLE
    })
    status!: CopyStatus;
}

export type BookCopyDocument = HydratedDocument<BookCopy>
export const BookCopySchema = SchemaFactory.createForClass(BookCopy);

BookCopySchema.index({ book: 1, library: 1, status: 1});