"use strict";
// Schemas như là nới định nghĩa các trường trong document
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = exports.Author = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Author = class Author {
    // @Prop là định nghĩa một trường(field) schema
    name;
    biography;
    nationlity;
    birthdate;
    genres;
    books;
    awards;
};
exports.Author = Author;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Author.prototype, "biography", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Author.prototype, "nationlity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Author.prototype, "birthdate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], Author.prototype, "genres", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], Author.prototype, "awards", void 0);
exports.Author = Author = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true }) // đánh dấu một schema (decorator)
], Author);
// tạo schema 
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);
//# sourceMappingURL=author.schema.js.map