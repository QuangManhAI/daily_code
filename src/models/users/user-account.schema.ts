import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IUserAccount } from "../../interfaces/IUserAccount";
import { Role } from "../../enums/Roles";
import { AccountStatus } from "../../enums/AccountStatus";

@Schema({ timestamps: true, collection: "user_accounts" })
export class UserAccount implements IUserAccount {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  @Prop({ required: true, lowercase: true, trim: true})
  email!: string;

  @Prop({ required: true })
  passwordHash!: string;

  @Prop({ type: String, enum: Object.values(Role), required: true, default: Role.MEMBER })
  role!: Role;

  @Prop({ type: String, enum: Object.values(AccountStatus), required: true, default: AccountStatus.ACTIVE })
  status!: AccountStatus;

  @Prop()
  lastLoginAt?: Date;
}
export type UserAccountDocument = HydratedDocument<UserAccount>;
export const UserAccountSchema = SchemaFactory.createForClass(UserAccount);
UserAccountSchema.index({ email: 1 }, { unique: true });