import {Injectable, NotFoundException} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Author, AuthorDocument } from "../../models/author.schema";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class AuthorsService {
    constructor(@InjectModel(Author.name) private readonly authorModel: Model<AuthorDocument>,)
    {}

    create(dto: CreateAuthorDto){
        return this.authorModel.create({
            ...dto,
            birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
            deathDate: dto.deathDate ? new Date(dto.deathDate) : undefined
        });
    }

    findAll(){
        return this.authorModel.find().exec();
    }

    async findOne(id: string) {
        const doc = await this.authorModel.findById(id).exec();
        if (!doc) throw new NotFoundException('Not found author');
        return doc;
    }

    async update(id: string, dto: UpdateAuthorDto) {
        const payload: any = {...dto};
        if (dto.birthDate) payload.birthDate = new Date(dto.birthDate);
        if (dto.deathDate) payload.deathDate = new Date(dto.deathDate);

        const doc = await this.authorModel.findByIdAndUpdate(id, dto, {new: true}).exec();
        if (!doc) throw new NotFoundException('Not found author');
        return doc;
    }

    async remove(id: string) {
        const doc = await this.authorModel.findByIdAndDelete(id).exec();
        if (!doc) throw new NotFoundException('not found author');
        return {delete: true};
    }
}