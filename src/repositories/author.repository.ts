// injectable là decorator đánh dấu service có thể được ịnject vào chõ khác
// inject: cơ chế quan trọng của DI, không cần tạo ra đối tượng phụ thuộc mà nhận đối tượng từ bên ngoài
// inject model để đánh dấu là được thao tác với mongodb
// Model cho phép gọi CRUD, truy vấn...

import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorDocument} from '../schemas/author.schema';
import { IAuthor } from '../interfaces/IAuthor';
@Injectable()
export class AuthorRepository{
    constructor(
        @InjectModel('Author') private readonly authorModel: Model<AuthorDocument>
    ){}
    

    // CRUD

    // create
    async create(data: IAuthor): Promise<AuthorDocument> {
        return this.authorModel.create(data);
    }


    // read
    async findAll(): Promise<AuthorDocument[]> {
        return this.authorModel.find().exec();
    }

    async findById(id: string): Promise<AuthorDocument | null> {
        return this.authorModel.findById(id).exec();
    }


    // update
    async update(id: string, data: Partial<IAuthor>): Promise<AuthorDocument | null> {
        return this.authorModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }


    // delete
    async delete(id: string): Promise<AuthorDocument | null> {
        return this.authorModel.findByIdAndDelete(id).exec();
    }
}