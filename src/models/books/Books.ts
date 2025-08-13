// xây dựng cụ thể một lớp book 

import type { BookGenre } from "../../enums/BookGenre";
import type { IBook } from "../../interfaces/IBook";

export abstract class Book implements IBook {
    // hàm khởi tạo cho các thuộc tính
    constructor(
        public readonly id: string,
        protected title: string,
        protected author: string,
        protected year: number,
        protected genre: BookGenre,
        protected totalCopies: number,
        protected availableCopies: number,
    ){}


    // định nghĩa các phương thức liên quan
    getId(): string {
        return this.id;
    }

    getAuthor(): string {
        return this.author;
    }

    getAvailableCopies(): number {
        return this.availableCopies;
    }

    getGenre(): BookGenre {
        return this.genre;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(_title: string): void {
        this.title = _title;
    }

    // thiết lập bản sách còn lại 
    setAvailableCopies(count: number): void {
        if (count < 0 || count > this.totalCopies) {
            throw new Error("Invalid values!")
        }
        this.availableCopies = count;
    }


    // cho mượn một sách thì giảm bản sách còn trong thư viện đi 1
    borrowCopy(): void {
        if (this.availableCopies <= 0) {
            throw new Error("No availableCopies!");
        }
        this.availableCopies--;
    }

    // khi một quyển sách được gửi trả
    returnCopy(): void {
        if (this.availableCopies < this.totalCopies) {
            this.availableCopies++;
        }
    }
}