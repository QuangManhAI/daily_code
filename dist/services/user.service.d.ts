import { UserRepsitory } from "../repositories/user.repository";
import { IUser } from "../interfaces/IUser";
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: UserRepsitory);
    create(user: IUser): Promise<import("../schemas/user.schemas").UserDocument>;
    getAll(): Promise<import("../schemas/user.schemas").UserDocument[]>;
    getById(id: string): Promise<import("../schemas/user.schemas").UserDocument | null>;
    update(id: string, data: Partial<IUser>): Promise<import("../schemas/user.schemas").UserDocument | null>;
    delete(id: string): Promise<import("../schemas/user.schemas").UserDocument | null>;
}
//# sourceMappingURL=user.service.d.ts.map