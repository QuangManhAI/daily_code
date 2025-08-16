"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
// kế thừa từ user
// thêm một vài phương thức
const User_1 = require("./User");
class Librarian extends User_1.User {
    userService;
    transactionService;
    constructor(id, name, age, role, gender, address, email, userService, transactionService) {
        super(id, name, age, role, gender, address, email);
        this.userService = userService;
        this.transactionService = transactionService;
    }
    // thêm một vài phương thức như đăng kí người mượn, trả sách ...
    // gọi lại service để sử dụng thử với database
    async registerBorrower(borrower) {
        await this.userService?.create(borrower);
    }
    async removeBorrower(borrowerId) {
        await this.userService?.delete(borrowerId);
    }
    async lendBook(transaction) {
        await this.transactionService?.create(transaction);
    }
    async returnBook(transactionId) {
        await this.transactionService?.delete(transactionId);
    }
}
exports.Librarian = Librarian;
//# sourceMappingURL=Librarian.js.map