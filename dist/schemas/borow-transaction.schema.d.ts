import { Document, Types } from "mongoose";
export declare class BorrowTransaction {
    borrwerId: Types.ObjectId;
    bookId: Types.ObjectId;
    borrweDate: Date;
    dueDate?: Date;
    returnDate?: Date;
    isReturned: boolean;
}
export type BorrowTransactionDocument = BorrowTransaction & Document;
export declare const BorrowTransactionSchema: import("mongoose").Schema<BorrowTransaction, import("mongoose").Model<BorrowTransaction, any, any, any, Document<unknown, any, BorrowTransaction, any, {}> & BorrowTransaction & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BorrowTransaction, Document<unknown, {}, import("mongoose").FlatRecord<BorrowTransaction>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<BorrowTransaction> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=borow-transaction.schema.d.ts.map