"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowTransaction = void 0;
// xử lí với giao dịch mượn
class BorrowTransaction {
    id;
    borrower;
    book;
    borrowDate;
    dueDate;
    returnDate;
    constructor(id, borrower, book, borrowDate, dueDate, returnDate) {
        this.id = id;
        this.borrower = borrower;
        this.book = book;
        this.borrowDate = borrowDate;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
    }
    getId() {
        return this.id;
    }
    getBorrower() {
        return this.borrower;
    }
    setBorrower(_borrower) {
        this.borrower = _borrower;
    }
    getBook() {
        return this.book;
    }
    setBook(_book) {
        this.book = _book;
    }
    getBorrowDate() {
        return this.borrowDate;
    }
    setBorrowDate(_borrowdate) {
        this.borrowDate = _borrowdate;
    }
    getDueDate() {
        return this.dueDate;
    }
    setDueDate(_duedate) {
        this.borrowDate = _duedate;
    }
    getReturnDate() {
        return this.returnDate;
    }
    setReturnDate(date) {
        this.returnDate = date;
    }
    isReturned() {
        return this.returnDate !== null;
    }
    isOverDue(currentDate = new Date()) {
        if (this.isReturned()) {
            return this.returnDate > this.dueDate;
        }
        return currentDate > this.dueDate;
    }
    //tính toán với các đặc trưng tìm các thông tin cần thiết
    // tính số ngày người mượn bị trễ  hay tính tiền phạt dựa trên số ngày trễ
    getOverdueDays(currentDate = new Date()) {
        if (!this.isOverDue(currentDate))
            return 0;
        const endDate = this.isReturned() ? this.returnDate : currentDate;
        const diffMs = endDate.getTime() - this.dueDate.getTime();
        return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    }
    calculateFine(finePerDay = 1000, currentDate = new Date()) {
        return this.getOverdueDays(currentDate) * finePerDay;
    }
    markReturned(_returnDate = new Date()) {
        this.returnDate = _returnDate;
    }
}
exports.BorrowTransaction = BorrowTransaction;
//# sourceMappingURL=BorrowTransaction.js.map