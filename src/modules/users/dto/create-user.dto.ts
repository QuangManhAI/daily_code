import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { Gender } from "../../../interfaces";
import { Role } from "../../../interfaces";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsOptional()
    age?: number;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    @IsEnum(Role)
    role!: Role;
}