"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const User_1 = require("./User");
const Roles_1 = require("../../enums/Roles");
class Librarian extends User_1.User {
    constructor(id, name, age, gender, address, email) {
        super(id, name, age, gender, address, email);
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
    toPlain() {
        return {
            name: this.getName(),
            age: this.getAge(),
            gender: this.getGender(),
            address: this.getAddress(),
            email: this.getEmail(),
            role: Roles_1.Role.LIBRARIAN
        };
    }
}
exports.Librarian = Librarian;
//# sourceMappingURL=Librarian.js.map