import { Injectable } from "@nestjs/common";
import { InjectModel, Schema } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument} from "../schemas/user.schemas";
import { Role } from "../enums/Roles";
import { IUser } from "../interfaces/IUser";

@Injectable()
export class UserRepsitory {
    constructor(
        @InjectModel('IUser') private readonly userModel:  Model<UserDocument>
    ) {}

    async create(data: Partial<IUser>): Promise<UserDocument> {
        return this.userModel.create(data);
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<UserDocument | null> {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, data: Partial<IUser>): Promise<UserDocument | null>{
        return this.userModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async delete(id: string):Promise <UserDocument | null> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async findBorrwers(): Promise<UserDocument[]> {
        return this.userModel.find({role: Role.BORROWER}).exec();
    }

    async findLibrarians(): Promise<UserDocument[]> {
        return this.userModel.find({role: Role.LIBRARIAN}).exec();
    }
}