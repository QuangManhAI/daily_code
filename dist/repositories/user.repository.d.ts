import { Model } from "mongoose";
import { UserDocument } from "../schemas/user.schemas";
import { IUser } from "../interfaces/IUser";
export declare class UserRepsitory {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(data: Partial<IUser>): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findById(id: string): Promise<UserDocument | null>;
    update(id: string, data: Partial<IUser>): Promise<UserDocument | null>;
    delete(id: string): Promise<UserDocument | null>;
    findBorrwers(): Promise<UserDocument[]>;
    findLibrarians(): Promise<UserDocument[]>;
}
//# sourceMappingURL=user.repository.d.ts.map