import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateLibraryDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    address!: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\+?\d{8, 15}$/)
    phone!: string;

    @IsEmail()
    email!: string;
}