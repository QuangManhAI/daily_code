import { Transform } from "class-transformer";
import { ArrayMinSize, IsArray, IsDateString, IsOptional, IsString } from "class-validator";
import { IsEnum } from "class-validator";
import { BookGenre } from "../../../enums/BookGenre";

export class CreateAuthorDto {
    @IsString()
    name!: string;

    @IsOptional()
    @IsString()
    biography?: string;

    @IsOptional()
    @IsString()
    nationality?: string;

    @IsOptional()
    @IsDateString()
    birthdDate?: Date;

    @IsString()
    @IsDateString()
    deathDate?: Date;

    @IsOptional()
    @Transform(({value}) => (Array.isArray(value) ? value : value ? [value] : []))
    @IsArray()
    @IsEnum(BookGenre, {each: true})
    genres?: BookGenre[];

    @IsOptional()
    @Transform(({value }) => (Array.isArray(value) ? value : value ? [value] : []))
    @IsArray()
    @ArrayMinSize(0)
    awards?: string[];
}