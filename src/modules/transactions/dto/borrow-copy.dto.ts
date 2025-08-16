import {IsDateString, IsMongoId} from 'class-validator';

export class BorrowCopyDto {
    @IsMongoId()
    borrower!: string;

    @IsMongoId()
    bookCopy!: string;

    @IsMongoId()
    library!: string;

    @IsDateString()
    borrowDate!: string;

    @IsDateString()
    dueDate!: string;
}