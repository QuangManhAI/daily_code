import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Inject } from "@nestjs/common";
import { BOOK_REPO, IBookRepository } from "./ports/book.repository";
import { Book } from "../../models/books/book.schema";

@Injectable()
export class BooksService {
  constructor(@Inject(BOOK_REPO) private readonly repo: IBookRepository) {}

  create(dto: CreateBookDto) {
    const payload: Partial<Book> = {
      title: dto.title,
      author: dto.author,
      genres: dto.genres,
      ...(dto.publishedYear !== undefined ? { publishedYear: dto.publishedYear } : {}),
      ...(dto.isbn ? { isbn: dto.isbn } : {}),
    };
    return this.repo.create(payload);
  }

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: string) {
    const doc = await this.repo.findById(id);
    if (!doc) throw new NotFoundException("Book not found");
    return doc;
  }

  async update(id: string, dto: UpdateBookDto) {
    const payload: Partial<Book> = {
      ...(dto.title ? { title: dto.title } : {}),
      ...(dto.author ? { author: dto.author } : {}),
      ...(dto.genres ? { genres: dto.genres } : {}),
      ...(dto.publishedYear !== undefined ? { publishedYear: dto.publishedYear } : {}),
      ...(dto.isbn ? { isbn: dto.isbn } : {}),
    };

    const doc = await this.repo.updateById(id, payload);
    if (!doc) throw new NotFoundException("Book not found");
    return doc;
  }

  async remove(id: string) {
    const ok = await this.repo.deleteById(id);
    if (!ok) throw new NotFoundException("Book not found");
    return { deleted: true };
  }
}