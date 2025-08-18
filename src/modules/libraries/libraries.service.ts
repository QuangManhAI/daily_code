import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Library, LibraryDocument } from '../../models/library.schema';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@Injectable()
export class LibrariesService {
    constructor(
        @InjectModel(Library.name) private readonly libModel: Model<LibraryDocument>,
    ){}

    create(dto: CreateLibraryDto){
        return this.libModel.create(dto);
    }

    findAll(){
        return this.libModel.find().exec();
    }

    async findOne(id: string){
        const doc = await this.libModel.findById(id).exec()
        if (!doc) throw new NotFoundException('Not FOund library');
        return doc;
    }

    async update(id: string, dto: UpdateLibraryDto) {
        const doc = await this.libModel.findByIdAndUpdate(id, dto, {new: true}).exec();
        if (!doc) throw new NotFoundException('Not found library');
        return doc;
    }

    async remove(id: string) {
        const doc = this.libModel.findByIdAndDelete(id).exec();
        if (!doc) throw new NotFoundException('Not found id');
        return {deleted: true}
    }
}