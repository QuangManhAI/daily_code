import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Author, AuthorSchemas } from "../../models/author.schema";
import { AuthorController } from "./authors.controller";
import { AuthorsService } from "./authors.service";
import { AUTHOR_REPO } from "./ports/author.repository";
import { MongooseAuthorRepository } from "./adapters/mongoose-author.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchemas }]),
  ],
  controllers: [AuthorController],
  providers: [
    AuthorsService,
    { provide: AUTHOR_REPO, useClass: MongooseAuthorRepository },
  ],
  exports: [AuthorsService],
})
export class AuthorsModule {}