import { ArrayMinSize, IsArray, IsEnum, IsInt, IsISBN, IsMongoId, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
import { BookGenre } from "../../../enums/BookGenre";
import { Transform } from "class-transformer";
export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsMongoId()
    author!: string;

    @Transform(({value})=> Array.isArray(value) ? value : [value])
    @IsArray()
    @ArrayMinSize(1)
    @IsEnum(BookGenre, {each: true})
    genres!: BookGenre[];

    @IsOptional()
    @IsInt()
    @Min(0)
    publishedYear?: number;


    @IsOptional()
    @IsISBN()
    isbn?: string;
}