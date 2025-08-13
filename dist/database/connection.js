"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
exports.MongoConnection = mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://manhnpq6852:200406@cluster0.jrtt3aq.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0');
//# sourceMappingURL=connection.js.map