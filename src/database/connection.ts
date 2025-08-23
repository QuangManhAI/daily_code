// ket noi dbmongo. dung .env de luu thong tin db
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const MongoConnection = MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (cfg: ConfigService) => ({
        uri : cfg.getOrThrow<string>('MONGO_URI'),
        dbName:cfg.get<string>('MONGO_DB') ?? 'library',
    }),
});