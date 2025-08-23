import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { MongoConnection } from "./database/connection";
import { BooksModule } from "./modules/books/books.module";
import { UserModule } from "./modules/users/users.module";
import { AuthorsModule } from "./modules/authors/authors.module";
import { LibrariesModule } from "./modules/libraries/libraries.module";
import { TransactionsModule } from "./modules/transactions/transactions.module";
import { AuthModule } from "./modules/auth/auth.module";
import { JwtAuthGuard } from "./modules/auth/jwt-auth.guard";
import { RolesGuard } from "./modules/auth/roles.guard";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoConnection,
    AuthModule,          
    BooksModule,
    UserModule,
    AuthorsModule,
    LibrariesModule,
    TransactionsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard }, 
    { provide: APP_GUARD, useClass: RolesGuard },   
  ],
})
export class AppModule {}