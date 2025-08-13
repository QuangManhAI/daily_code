"use strict";
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
exports.BorrowTransactionService = void 0;
const common_1 = require("@nestjs/common");
const borrow_transaction_repository_1 = require("../repositories/borrow-transaction.repository");
let BorrowTransactionService = class BorrowTransactionService {
    borrowRepo;
    constructor(borrowRepo) {
        this.borrowRepo = borrowRepo;
    }
    async create(transaction) {
        return this.borrowRepo.create(transaction);
    }
    async getAll() {
        return this.borrowRepo.findAll();
    }
    async getById(id) {
        return this.borrowRepo.findById(id);
    }
    async update(id, data) {
        return this.borrowRepo.update(id, data);
    }
    async delete(id) {
        return this.borrowRepo.delete(id);
    }
};
exports.BorrowTransactionService = BorrowTransactionService;
exports.BorrowTransactionService = BorrowTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [borrow_transaction_repository_1.BorrowTransactionRepository])
], BorrowTransactionService);
//# sourceMappingURL=borrow-transaction.service.js.map