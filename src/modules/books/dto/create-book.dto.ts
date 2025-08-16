import { IsArray, IsEnum, IsISBN, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
import { BookGenre } from "../../../interfaces";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsMongoId()
    author!: string;

    @IsArray()
    @IsEnum(BookGenre, {each: true})
    genres!: BookGenre[];

    @IsOptional()
    @IsInt()
    @Min(0)
    publishedYear?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    totalCopies?: number;
}