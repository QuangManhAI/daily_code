import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookDocument } from "../../models/books/book.schema";
import { Model } from "mongoose";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private readonly bookModel: Model<BookDocument>) {}
    
    create(dto: CreateBookDto) {
        return this.bookModel.create(dto);
    }

    findAll() {
        return this.bookModel.find().populate('author').exec();
    }

    async findOne(id: string){
        const doc = await this.bookModel.findById(id).populate('author').exec();
        if (!doc) throw new NotFoundException('Book not found');
        return doc;
    }

    async update(id: string, dto: UpdateBookDto) {
        const doc = await this.bookModel.findByIdAndUpdate(id, dto, {new: true}).exec();
        if (!doc) throw new NotFoundException('Book not found');
        return doc;
    }

    async remove(id: string) {
        const doc = await this.bookModel.findByIdAndDelete(id).exec();
        if (!doc) throw new NotFoundException('Book not Found');
        return {deleted: true};
    }
}