"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrower = void 0;
const User_1 = require("./User");
class Borrower extends User_1.User {
    borrowedBooks = [];
    constructor(id, name, age, role, gender, address, email) {
        super(id, name, age, role, gender, address, email);
    }
    getBorroweddBook() {
        return this.borrowedBooks;
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(bookId) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.getId() !== bookId);
    }
}
exports.Borrower = Borrower;
//# sourceMappingURL=Borrower.js.map