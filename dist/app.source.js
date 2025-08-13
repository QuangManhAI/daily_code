"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModules = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const connection_1 = require("./database/connection");
const author_schema_1 = require("./schemas/author.schema");
const book_schema_1 = require("./schemas/book.schema");
const borow_transaction_schema_1 = require("./schemas/borow-transaction.schema");
const user_schemas_1 = require("./schemas/user.schemas");
const author_repository_1 = require("./repositories/author.repository");
const book_repository_1 = require("./repositories/book.repository");
const borrow_transaction_repository_1 = require("./repositories/borrow-transaction.repository");
const user_repository_1 = require("./repositories/user.repository");
const author_service_1 = require("./services/author.service");
const book_service_1 = require("./services/book.service");
const borrow_transaction_service_1 = require("./services/borrow-transaction.service");
const user_service_1 = require("./services/user.service");
let AppModules = class AppModules {
};
exports.AppModules = AppModules;
exports.AppModules = AppModules = __decorate([
    (0, common_1.Module)({
        imports: [
            connection_1.MongoConnection,
            mongoose_1.MongooseModule.forFeature([
                { name: author_schema_1.Author.name, schema: author_schema_1.AuthorSchema },
                { name: book_schema_1.Book.name, schema: book_schema_1.BookSchema },
                { name: borow_transaction_schema_1.BorrowTransaction.name, schema: borow_transaction_schema_1.BorrowTransactionSchema },
                { name: user_schemas_1.User.name, schema: user_schemas_1.UserSchema },
            ]),
        ],
        providers: [
            author_repository_1.AuthorRepository,
            book_repository_1.BookRepository,
            borrow_transaction_repository_1.BorrowTransactionRepository,
            user_repository_1.UserRepsitory,
            author_service_1.AuthorService,
            book_service_1.BookService,
            borrow_transaction_service_1.BorrowTransactionService,
            user_service_1.UserService,
        ]
    })
], AppModules);
//# sourceMappingURL=app.source.js.map