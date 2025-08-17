import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min, MinLength } from "class-validator";
import { Role } from "../../../enums/Roles";
import { Gender } from "../../../enums/Gender";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    age?: number;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsEnum(Role)
    role?: Role;
}