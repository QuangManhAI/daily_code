"use strict";
// kế thừa từ book cho fictio book 
Object.defineProperty(exports, "__esModule", { value: true });
exports.FictionBook = void 0;
const Books_1 = require("./Books");
class FictionBook extends Books_1.Book {
    chapters;
    series;
    constructor(id, title, author, year, genre, totalCopies, availableCopies, chapters, series) {
        super(id, title, author, year, genre, totalCopies, availableCopies);
        this.chapters = chapters;
        this.series = series;
    }
    getChapters() {
        return this.chapters;
    }
    getSeries() {
        return this.series;
    }
    setSeries(_series) {
        this.series = _series;
    }
    getTitle() {
        return `${super.getTitle()}${this.series ? ` (Series: ${this.series})` : ""}`;
    }
}
exports.FictionBook = FictionBook;
//# sourceMappingURL=FictionBook.js.map