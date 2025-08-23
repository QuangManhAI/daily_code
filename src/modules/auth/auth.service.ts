import { Injectable, UnauthorizedException, ForbiddenException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserAccount, UserAccountDocument } from "../../models/users/user-account.schema";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcryptjs";
import { AccountStatus } from "../../enums/AccountStatus";
import { AuthTokens, JwtPayLoad } from "../../interfaces/IAuth";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserAccount.name) private readonly uaModel: Model<UserAccountDocument>,
    private readonly jwt: JwtService,
    private readonly cfg: ConfigService,
) {}

  async validateUser(email: string, password: string): Promise<UserAccount> {
    const user = await this.uaModel.findOne({ email: email.toLowerCase().trim() }).exec();
    if (!user) throw new UnauthorizedException("Invalid credentials");

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) throw new UnauthorizedException("Invalid credentials");

    if (user.status !== AccountStatus.ACTIVE) {
      throw new ForbiddenException("Account is not active");
    }
    return user;
}

async login(email: string, password: string): Promise<AuthTokens> {
  const user = await this.validateUser(email, password); 

  const payload: JwtPayLoad = {
    sub: user._id as string,
    role: user.role,
    email: user.email,
  };

  const accessToken = await this.jwt.signAsync(payload, {
    secret: this.cfg.get<string>("JWT_SECRET", "dev-secret"),
    expiresIn: this.cfg.get<string>("JWT_EXPIRES_IN", "1h"),
  });

  await this.uaModel.updateOne(
    { _id: user._id },
    { $set: { lastLoginAt: new Date() } }
  ).exec();

  return { accessToken };
}
}