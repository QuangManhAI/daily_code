import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Gender} from "../../enums/Gender";
import { Role } from "../../enums/Roles";
import { IUser } from "../../interfaces/IUser";

@Schema({timestamps: true, collection: 'users'}) 
export class User implements IUser{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;

    @Prop({ required: true, trim: true})
    name!: string;

    @Prop({ lowercase: true, trim: true, unique: true, sparse: true})
    email?: string;

    @Prop() address?: string;

    @Prop({min: 0})
    age?: number;

    @Prop({type: String, enum: Object.values(Gender)})
    gender?: Gender;

    @Prop({type: String, enum: Object.values(Role), required: true,
         default: Role.MEMBER})
    role!: Role;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({role: 1});