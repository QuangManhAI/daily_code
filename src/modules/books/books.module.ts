import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "../../models/books/book.schema";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { Author, AuthorSchemas } from "../../models/author.schema";
import { BOOK_REPO } from "./ports/book.repository";
import { MongooseBookRepository } from "./adapter/mongoose-book.repository";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchemas },
    ]),
  ],
  providers: [
    BooksService,
    { provide: BOOK_REPO, useClass: MongooseBookRepository },
  ],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}