"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const User_1 = require("./User");
class Librarian extends User_1.User {
    constructor(id, name, age, role, gender, address, email) {
        super(id, name, age, role, gender, address, email);
    }
    addBook(book) {
        console.log(`Librarian ${this.getName()} added book: ${book.getTitle()}`);
    }
    remove(bookId) {
        console.log(`Librarian ${this.getName()} remove book: ${bookId}`);
    }
    registerBorrower(borrower) {
        console.log(`Librarian ${this.getName()} registered borrower: ${borrower.getName()}`);
    }
    removeBorrower(borrowerId) {
        console.log(`Librarian ${this.getName()} removed borrower ID: ${borrowerId}`);
    }
}
exports.Librarian = Librarian;
//# sourceMappingURL=Librarian.js.map