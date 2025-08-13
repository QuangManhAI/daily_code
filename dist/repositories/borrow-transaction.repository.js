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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowTransactionRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BorrowTransactionRepository = class BorrowTransactionRepository {
    borrowTransactionModel;
    constructor(borrowTransactionModel) {
        this.borrowTransactionModel = borrowTransactionModel;
    }
    async create(data) {
        return this.borrowTransactionModel.create(data);
    }
    async findAll() {
        return this.borrowTransactionModel.find().populate('borrowerId').populate('bookId').exec();
    }
    async findById(id) {
        return this.borrowTransactionModel.findById(id).populate('borrowerId').populate('bookId').exec();
    }
    async update(id, data) {
        return this.borrowTransactionModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id) {
        return this.borrowTransactionModel.findByIdAndDelete(id).exec();
    }
    async findActiveByBorrower(borrowerId) {
        return this.borrowTransactionModel.find({
            borrwerId: new mongoose_2.Types.ObjectId(borrowerId),
            isReturned: false,
        })
            .populate('bookId')
            .exec();
    }
};
exports.BorrowTransactionRepository = BorrowTransactionRepository;
exports.BorrowTransactionRepository = BorrowTransactionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('BorrowTransaction')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BorrowTransactionRepository);
//# sourceMappingURL=borrow-transaction.repository.js.map