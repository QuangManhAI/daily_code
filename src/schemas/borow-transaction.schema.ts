import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({timestamps: true}) 
export class BorrowTransaction {
    @Prop({type: Types.ObjectId, ref: 'User', required: true})
    borrwerId!: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: 'Book', required: true})
    bookId!: Types.ObjectId;

    @Prop({required: true}) 
    borrweDate!: Date;

    @Prop()
    dueDate?: Date;

    @Prop()
    returnDate?: Date;

    @Prop({default: false})
    isReturned!: boolean;
}

export type BorrowTransactionDocument = BorrowTransaction & Document;
export const BorrowTransactionSchema = SchemaFactory.createForClass(BorrowTransaction);