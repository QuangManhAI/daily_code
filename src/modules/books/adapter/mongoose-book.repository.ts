import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book, BookDocument } from "../../../models/books/book.schema";
import { IBookRepository } from "../ports/book.repository";

@Injectable()
export class MongooseBookRepository implements IBookRepository {
  constructor(@InjectModel(Book.name) private readonly model: Model<BookDocument>) {}

  create(data: Partial<Book>) {
    return this.model.create(data);
}

  findAll() {
    return this.model.find().populate("author").exec();
}

  findById(id: string) {
    return this.model.findById(id).populate("author").exec();
}

  updateById(id: string, data: Partial<Book>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
}
  async deleteById(id: string) {
    const doc = await this.model.findByIdAndDelete(id).exec();
    return !!doc;
  }
}