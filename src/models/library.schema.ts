import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, HydrateOptions } from "mongoose";
import { ILibrary } from "../interfaces";

@Schema({timestamps: true, collection: 'libraries'})
export class Library implements ILibrary{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;

    @Prop({required: true, trim: true})
    name!: string;

    @Prop() address?: string;
    @Prop() phone?: string;

    @Prop({lowercase: true, trim: true, unique: true, sparse: true})
    email?: string;
}
export type LibraryDocument = HydratedDocument<Library>;
export const LibrarySchema = SchemaFactory.createForClass(Library);
LibrarySchema.index({name: 1}, {unique: true});