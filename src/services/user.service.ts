import { Injectable } from "@nestjs/common";
import { UserRepsitory } from "../repositories/user.repository";
import { IUser } from "../interfaces/IUser";

@Injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepsitory) {}

    async create(user: IUser) {
        return this.userRepo.create(user);
    }

    async getAll() {
        return this.userRepo.findAll();
    }

    async getById(id: string) {
        return this.userRepo.findById(id);
    }

    async update(id: string, data: Partial<IUser>) {
        return this.userRepo.update(id, data);
    }

    async delete(id: string) {
        return this.userRepo.delete(id);
    }
}
