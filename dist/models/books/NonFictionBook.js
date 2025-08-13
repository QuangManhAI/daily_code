"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonFictionBook = void 0;
const Books_1 = require("./Books");
class NonFictionBook extends Books_1.Book {
    subject;
    researchField;
    constructor(id, title, author, year, genre, totalCopies, availableCopies, subject, researchField) {
        super(id, title, author, year, genre, totalCopies, availableCopies);
        this.subject = subject;
        this.researchField = researchField;
    }
    getSubject() {
        return this.subject;
    }
    setSubject(_subject) {
        this.subject = _subject;
    }
    getResearchField() {
        return this.researchField;
    }
    setResearchField(field) {
        this.researchField = field;
    }
    getTitle() {
        const baseTilte = super.getTitle();
        return `${baseTilte} - [${this.subject}]`;
    }
}
exports.NonFictionBook = NonFictionBook;
//# sourceMappingURL=NonFictionBook.js.map