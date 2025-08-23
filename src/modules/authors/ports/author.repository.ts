import { AuthTokens } from "../../../interfaces/IAuth";
import { Author } from "../../../models/author.schema";

export interface IAuthorRepository {
    create(data: Partial<Author>): Promise<Author>;
    findAll(): Promise<Author[]>;
    findById(id: string): Promise<Author|null>;
    updateById(id: string, data: Partial<Author>): Promise<Author|null>;
    deleteById(id: string): Promise<boolean>;
}

export const AUTHOR_REPO = Symbol("AUTHOR_REPO");
