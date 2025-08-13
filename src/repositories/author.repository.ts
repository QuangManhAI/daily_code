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
    
    async create(data: IAuthor): Promise<AuthorDocument> {
        return this.authorModel.create(data);
    }

    async findAll(): Promise<AuthorDocument[]> {
        return this.authorModel.find().exec();
    }

    async findById(id: string): Promise<AuthorDocument | null> {
        return this.authorModel.findById(id).exec();
    }

    async update(id: string, data: Partial<IAuthor>): Promise<AuthorDocument | null> {
        return this.authorModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async delete(id: string): Promise<AuthorDocument | null> {
        return this.authorModel.findByIdAndDelete(id).exec();
    }
}