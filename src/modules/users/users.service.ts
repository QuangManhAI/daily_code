import {Injectable, NotFoundException} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument, User } from "../../models/users/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,) {}

    async create(dto: CreateUserDto): Promise<User> {
        const created = new this.userModel(dto);
        return created.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async update(id: string, dto: UpdateUserDto):Promise<User> {
        const updated = await this.userModel.findByIdAndUpdate(id, dto, {new: true}).exec();
        if (!updated) throw new NotFoundException('User not found');
        return updated;
    }

    async remove(id: string): Promise<{deleted: boolean}> {
        const result = await this.userModel.findByIdAndDelete(id).exec();
        if (!result) throw new NotFoundException('User not found');
        return {deleted: true}
    }
}