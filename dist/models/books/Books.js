"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    id;
    title;
    author;
    year;
    genre;
    totalCopies;
    availableCopies;
    constructor(id, title, author, year, genre, totalCopies, availableCopies) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.totalCopies = totalCopies;
        this.availableCopies = availableCopies;
    }
    getId() {
        return this.id;
    }
    getAuthor() {
        return this.author;
    }
    getAvailableCopies() {
        return this.availableCopies;
    }
    getGenre() {
        return this.genre;
    }
    getTitle() {
        return this.title;
    }
    setTitle(_title) {
        this.title = _title;
    }
    setAvailableCopies(count) {
        if (count < 0 || count > this.totalCopies) {
            throw new Error("Invalid values!");
        }
        this.availableCopies = count;
    }
    borrowCopy() {
        if (this.availableCopies <= 0) {
            throw new Error("No availableCopies!");
        }
        this.availableCopies--;
    }
    returnCopy() {
        if (this.availableCopies < this.totalCopies) {
            this.availableCopies++;
        }
    }
}
exports.Book = Book;
//# sourceMappingURL=Books.js.map