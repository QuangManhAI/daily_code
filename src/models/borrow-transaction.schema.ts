import { Prop, Schema, SchemaFactory,  } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { TxStatus } from "../enums/Txstatus";
import { IBorrowTransaction } from "../interfaces/IBorrowTransaction";
import { BookCopy } from "./books/book-copies.schema";
@Schema({timestamps: true, collection: 'borrow_transactions'})
export class BorrowTransaction implements IBorrowTransaction {

    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;

    @Prop({type: Types.ObjectId, ref: 'User', required: true, index: true})
    borrower!: string;

    @Prop({type: Types.ObjectId, ref: 'BookCopy', required: true, index: true,
    })
    bookCopy!: string;

    @Prop({ type: Types.ObjectId, ref: 'Library', required: true, index: true})
    library!: string;

    @Prop({required: true})
    borrowDate!: Date;

    @Prop({required: true})
    dueDate!: Date;

    @Prop({type: Date ,default: null})
    returnDate?: Date | null;

    @Prop({type: String, enum: Object.values(TxStatus), default: TxStatus.BORROWED,
        index: true
    })
    status!: TxStatus;

    @Prop({default: 0,  min: 0})
    fineTotal?: number;
}

export type BorrowTransactionDocument = HydratedDocument<BorrowTransaction>;
export const BorrowTransactionSchema = SchemaFactory.createForClass(BorrowTransaction);

BorrowTransactionSchema.index({borrower: 1, status: 1, dueDate: 1});
BorrowTransactionSchema.index({library: 1, status: 1});
BorrowTransactionSchema.index({BookCopy: 1, status: 1});