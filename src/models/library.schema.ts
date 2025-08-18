import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument} from "mongoose";
import { ILibrary } from "../interfaces/ILibrary";

@Schema({timestamps: true, collection: 'libraries'})
export class Library implements ILibrary{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;

    @Prop({required: true, trim: true})
    name!: string;

    @Prop({required: true}) address!: string;
    @Prop({required: true}) phone!: string;

    @Prop({lowercase: true, trim: true, unique: true, required: true})
    email!: string;
}
export type LibraryDocument = HydratedDocument<Library>;
export const LibrarySchema = SchemaFactory.createForClass(Library);
LibrarySchema.index({name: 1}, {unique: true});