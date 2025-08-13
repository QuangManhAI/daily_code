// Gọi mongoose từ nestjs
import { MongooseModule } from "@nestjs/mongoose";

// Kết nối với uri của mongodb atlas
export const MongoConnection = MongooseModule.forRoot(
    process.env.MONGO_URI || 'mongodb+srv://manhnpq6852:200406@cluster0.jrtt3aq.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0'
)