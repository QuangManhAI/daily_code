// kế thừa từ user
// thêm một vài phương thức
import { User } from "./User";
import { Gender } from "../../enums/Gender";
import { Role } from "../../enums/Roles";
import type { IBorrower } from "../../interfaces/IBorrower";
import type { IBorrowTransaction } from "../../interfaces/IBorrowTransaction";
import { BorrowTransaction } from "../BorrowTransaction";
import { BorrowTransactionDocument } from "../../schemas/borow-transaction.schema";
import { UserService } from "../../services/user.service";
import { BorrowTransactionService } from "../../services/borrow-transaction.service";
export class Librarian extends User {
    constructor(
        id: string,
        name: string,
        age: number,
        role: Role,
        gender?: Gender,
        address?: string,
        email?: string,
        private readonly userService?: UserService,
        private readonly transactionService?: BorrowTransactionService
    ) {
        super(id, name, age, role, gender, address, email);
    }


    // thêm một vài phương thức như đăng kí người mượn, trả sách ...
    // gọi lại service để sử dụng thử với database
    async registerBorrower(borrower: IBorrower): Promise<void> {
        await this.userService?.create(borrower);
    }

    async removeBorrower(borrowerId: string): Promise<void> {
        await this.userService?.delete(borrowerId);
    }

    async lendBook(transaction: IBorrowTransaction): Promise<void> {
        await this.transactionService?.create(transaction);
    }

    async returnBook(transactionId: string): Promise<void> {
        await this.transactionService?.delete(transactionId);
    }
}
