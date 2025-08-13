import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookSchema, BookDocument } from "../schemas/book.schema";
import { IBook } from "../interfaces/IBook";

@Injectable()
export class BookRepository {
    constructor(
        @InjectModel('Book') private readonly bookModel: Model<BookDocument>
    ) {}

    async create(book: IBook): Promise<BookDocument> {
        return this.bookModel.create(book);
    }

    async findById(id: string): Promise<BookDocument | null> {
        return this.bookModel.findById(id).exec();
    }

    async findAll(): Promise<BookDocument[]> {
        return this.bookModel.find().exec();
    }   

    async update(id: string, updateData: Partial<IBook>): Promise<BookDocument | null> {
        return this.bookModel.findByIdAndUpdate(id, updateData, {new: true}).exec();
    }

    async delete(id: string): Promise<BookDocument | null> {
        return this.bookModel.findByIdAndDelete(id).exec();
    }
}