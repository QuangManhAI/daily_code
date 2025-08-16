import { User } from "./User";
import { Gender } from "../../enums/Gender";
import { Role } from "../../enums/Roles";
import type { IBorrower } from "../../interfaces/IBorrower";
import type { IBorrowTransaction } from "../../interfaces/IBorrowTransaction";
import { UserService } from "../../services/user.service";
import { BorrowTransactionService } from "../../services/borrow-transaction.service";
export declare class Librarian extends User {
    private readonly userService?;
    private readonly transactionService?;
    constructor(id: string, name: string, age: number, role: Role, gender?: Gender, address?: string, email?: string, userService?: UserService | undefined, transactionService?: BorrowTransactionService | undefined);
    registerBorrower(borrower: IBorrower): Promise<void>;
    removeBorrower(borrowerId: string): Promise<void>;
    lendBook(transaction: IBorrowTransaction): Promise<void>;
    returnBook(transactionId: string): Promise<void>;
}
//# sourceMappingURL=Librarian.d.ts.map