import { Injectable } from "@nestjs/common";
import { AuthorRepository } from "../repositories/author.repository";
import { IAuthor } from "../interfaces/IAuthor";
@Injectable()
export class AuthorService {
    constructor(private readonly authorRepo: AuthorRepository) {}

    async create(author: IAuthor) {
        return this.authorRepo.create(author);
    }

    async getAll() {
        return this.authorRepo.findAll();
    }

    async getById(id: string) {
        return this.authorRepo.findById(id);
    }

    async update(id: string, data: Partial<IAuthor>) {
        return this.authorRepo.update(id, data);
    }

    async delete(id: string) {
        return this.authorRepo.delete(id);
    }
}