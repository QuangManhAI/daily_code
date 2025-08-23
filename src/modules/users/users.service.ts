import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Inject } from "@nestjs/common";
import { USER_REPO, IUserRepository } from "./ports/user.repository";
import { User } from "../../models/users/user.schema";

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPO) private readonly repo: IUserRepository) {}

  async create(dto: CreateUserDto): Promise<User> {
    const payload: Partial<User> = {
      name: dto.name,
      ...(dto.age !== undefined ? { age: dto.age } : {}),
      ...(dto.gender !== undefined ? { gender: dto.gender } : {}),
      ...(dto.email ? { email: dto.email } : {}),
      ...(dto.role !== undefined ? { role: dto.role } : {}),
      ...(dto.address ? { address: dto.address } : {}),
    };
    return this.repo.create(payload);
  }

  findAll(): Promise<User[]> {
    return this.repo.findAll();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.repo.findById(id);
    if (!user) throw new NotFoundException("user not found");
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const payload: Partial<User> = {
      ...(dto.name ? { name: dto.name }: {}),
      ...(dto.age !== undefined ? { age: dto.age }: {}),
      ...(dto.gender !== undefined ? { gender: dto.gender }: {}),
      ...(dto.email ? { email: dto.email }: {}),
      ...(dto.role !== undefined ? { role: dto.role }: {}),
      ...(dto.address ? { address: dto.address }: {}),
    };

    const updated = await this.repo.updateById(id, payload);
    if (!updated) throw new NotFoundException("User Not found");
    return updated;
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const ok = await this.repo.deleteById(id);
    if (!ok) throw new NotFoundException("User not found");
    return { deleted: true };
  }
}