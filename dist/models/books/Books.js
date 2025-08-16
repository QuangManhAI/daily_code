"use strict";
// xây dựng cụ thể một lớp book 
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
    // hàm khởi tạo cho các thuộc tính
    constructor(id, title, author, year, genre, totalCopies, availableCopies) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.totalCopies = totalCopies;
        this.availableCopies = availableCopies;
    }
    // định nghĩa các phương thức liên quan
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
    // thiết lập bản sách còn lại 
    setAvailableCopies(count) {
        if (count < 0 || count > this.totalCopies) {
            throw new Error("Invalid values!");
        }
        this.availableCopies = count;
    }
    // cho mượn một sách thì giảm bản sách còn trong thư viện đi 1
    borrowCopy() {
        if (this.availableCopies <= 0) {
            throw new Error("No availableCopies!");
        }
        this.availableCopies--;
    }
    // khi một quyển sách được gửi trả
    returnCopy() {
        if (this.availableCopies < this.totalCopies) {
            this.availableCopies++;
        }
    }
}
exports.Book = Book;
//# sourceMappingURL=Books.js.map