import {Injectable} from "@nestjs/common";
import { BookRepository } from "../repositories/book.repository";
import { IBook } from "../interfaces/IBook";

@Injectable()
export class BookService {
    constructor(private readonly bookRepo: BookRepository) {}

    async create(book: IBook) {
        this.bookRepo.create(book);
    }

    async getAll() {
        return this.bookRepo.findAll();
    }

    async getById(id: string) {
        return this.bookRepo.findById(id);
    }

    async update(id: string, data: Partial<IBook>) {
        return this.bookRepo.update(id, data);
    }

    async delete(id: string) {
        return this.bookRepo.delete(id);
    }
}