import { IsDateString, IsMongoId, IsNumber, IsOptional, Min } from "class-validator";

export class ReturnCopyDto {
    @IsMongoId()
    transactionId!: string;

    @IsOptional()
    @IsDateString()
    returnDate?: string;

    @IsOptional()
    @Min(0)
    @IsNumber()
    finePerDay?: number;
}