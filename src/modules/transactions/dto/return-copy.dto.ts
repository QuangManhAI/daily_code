import { IsDateString, IsMongoId, IsOptional } from "class-validator";

export class ReturnCopyDto {
    @IsMongoId()
    transactionId!: string;

    @IsOptional()
    @IsDateString()
    returnDate?: string;

    @IsOptional()
    finePerDay?: number;
}