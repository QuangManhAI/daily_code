import { MongooseModule } from "@nestjs/mongoose";

export const MongoConnection = MongooseModule.forRoot(
    process.env.MONGO_URI || 'mongodb+srv://manhnpq6852:200406@cluster0.jrtt3aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)