import {Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongoConnection } from "./database/connection";
import { BooksModule } from "./modules/books/books.module";
import { UserModule } from "./modules/users/users.module";
import { AuthorsModule } from "./modules/authors/authors.module";
import { LibrariesModule } from "./modules/libraries/libraries.module";
import { TransactionsModule } from "./modules/transactions/transactions.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongoConnection,
        BooksModule,
        UserModule,
        AuthorsModule,
        LibrariesModule,
        TransactionsModule
    ],
})
export class AppModule{}