import { User } from "../../../models/users/user.schema";

export interface IUserRepository {
  create(data: Partial<User>): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  updateById(id: string, data: Partial<User>): Promise<User | null>;
  deleteById(id: string): Promise<boolean>;
}

export const USER_REPO = Symbol("USER_REPO");