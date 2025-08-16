import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "../../models/books/book.schema";
import { BooksController } from "./books.controller";
import { Author, AuthorSchemas } from "../../models/author.schema";
import { BooksService } from "./books.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Book.name, schema: BookSchema},
            {name: Author.name, schema: AuthorSchemas}
        ]),
    ],
    providers: [BooksService],
    controllers: [BooksController],
    exports: [BooksService],
})
export class BooksModule{}