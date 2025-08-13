import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BookGenre } from '../enums/BookGenre';

@Schema()
export class Book {
    @Prop({ required: true})
    title!: string;

    @Prop({ required: true})
    author!: string;

    @Prop({ enum: BookGenre, required: true})
    genre!: BookGenre;

    @Prop({required: true})
    availableCopies!: number;
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);