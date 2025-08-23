import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Author, AuthorDocument } from "../../../models/author.schema";
import { IAuthorRepository } from "../ports/author.repository";

@Injectable()
export class MongooseAuthorRepository implements IAuthorRepository {
  constructor(@InjectModel(Author.name) private readonly model: Model<AuthorDocument>) {}

  async create(data: Partial<Author>): Promise<Author> {
    return this.model.create(data);
  }

  async findAll(): Promise<Author[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<Author | null> {
    return this.model.findById(id).exec();
  }

  async updateById(id: string, data: Partial<Author>): Promise<Author | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteById(id: string): Promise<boolean> {
    const doc = await this.model.findByIdAndDelete(id).exec();
    return !!doc;
  }
}