import { IsDateString, IsMongoId, IsOptional } from "class-validator";

export class ReturnCopyDto {
    @IsMongoId()
    transactionIs!: string;

    @IsOptional()
    @IsDateString()
    returnDate?: string;

    @IsOptional()
    fineDay?: number;

    @IsOptional()
    finePerDay?: number;
}