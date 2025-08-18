import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthorController } from "./authors.controller";
import { AuthorsService } from "./authors.service";
import { Author, AuthorSchemas } from "../../models/author.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Author.name,
            schema: AuthorSchemas
        }]),
    ],
    controllers: [AuthorController],
    providers: [AuthorsService],
    exports: [AuthorsService],
})
export class AuthorsModule {}