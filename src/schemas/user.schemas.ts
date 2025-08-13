import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Gender } from "../enums/Gender";
import { Role } from "../enums/Roles";

@Schema({timestamps: true})

export class User {
    @Prop({required: true})
    name!: string;

    @Prop()
    age!: number;

    @Prop()
    gender?: Gender;

    @Prop({enum: Role, required: true})
    role!: Role;

    @Prop()
    address?: string;

    @Prop()
    email?: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);