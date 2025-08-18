import { Transform } from "class-transformer";
import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsEnum } from "class-validator";
import { BookGenre } from "../../../enums/BookGenre";

export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsOptional()
    @IsString()
    biography?: string;

    @IsOptional()
    @IsString()
    nationality?: string;

    @IsOptional()
    @IsDateString()
    birthDate?: string;

    @IsOptional()
    @IsDateString()
    deathDate?: string;

    @IsOptional()
    @Transform(({value}) => (Array.isArray(value) ? value : value ? [value] : []))
    @IsArray()
    @IsEnum(BookGenre, {each: true})
    genres?: BookGenre[];

    @IsOptional()
    @Transform(({value }) => (Array.isArray(value) ? value : value ? [value] : []))
    @IsArray()
    @ArrayMinSize(0)
    @IsString({each: true})
    awards?: string[];
}