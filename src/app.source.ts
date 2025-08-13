// gọi và kết nối tất cả thành phần lại
// chuẩn bị để chạy main.ts

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongoConnection } from "./database/connection";

import { Author, AuthorSchema } from './schemas/author.schema';
import { Book, BookSchema } from './schemas/book.schema';
import { BorrowTransaction, BorrowTransactionSchema } from './schemas/borow-transaction.schema';
import { User, UserSchema } from './schemas/user.schemas';

import { AuthorRepository } from './repositories/author.repository';
import { BookRepository } from './repositories/book.repository';
import { BorrowTransactionRepository } from './repositories/borrow-transaction.repository';
import { UserRepsitory } from './repositories/user.repository';

import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { BorrowTransactionService } from './services/borrow-transaction.service';
import { UserService } from './services/user.service';

@Module({
    imports: [
        MongoConnection,
        MongooseModule.forFeature([
            {name: Author.name, schema: AuthorSchema},
            {name: Book.name, schema: BookSchema},
            { name: BorrowTransaction.name, schema: BorrowTransactionSchema },
            { name: User.name, schema: UserSchema },            
        ]),
    ],
    providers: [
    AuthorRepository,
    BookRepository,
    BorrowTransactionRepository,
    UserRepsitory,
    AuthorService,
    BookService,
    BorrowTransactionService,
    UserService,
    ]
}) 
export class AppModules {}