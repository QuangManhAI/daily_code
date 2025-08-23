import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersService } from "./users.service";
import { UserController } from "./users.controller";
import { UserSchema, User } from "../../models/users/user.schema";
import { USER_REPO } from "./ports/user.repository";
import { MongooseUserRepository } from "./adapter/mongoose-user.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UsersService,
    { provide: USER_REPO, useClass: MongooseUserRepository },
  ],
  controllers: [UserController],
  exports: [UsersService],
})
export class UserModule {}