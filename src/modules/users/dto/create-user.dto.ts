import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
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

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  address?: string;
}