```
src/
├── app.module.ts
├── main.ts
├── database/
│   └── connection.ts
├── enums/
│   ├── AccountStatus.ts
│   ├── BookGenre.ts
│   ├── CopyStatus.ts
│   ├── Gender.ts
│   ├── Roles.ts
│   └── TxStatus.ts
├── interfaces/
│   ├── common.ts
│   ├── IAuth.ts
│   ├── IAuthor.ts
│   ├── IBook.ts
│   ├── IBookCopy.ts
│   ├── IBorrowTransaction.ts
│   ├── ILibrary.ts
│   ├── IUser.ts
│   └── IUserAccount.ts
├── models/
│   ├── author.schema.ts
│   ├── books/
│   │   ├── book-copies.schema.ts
│   │   └── book.schema.ts
│   ├── borrow-transaction.schema.ts
│   ├── library.schema.ts
│   └── users/
│       ├── user-account.schema.ts
│       └── user.schema.ts
└── modules/
    ├── auth/
    │   ├── dto/
    │   │   └── login.dto.ts
    │   ├── auth.controller.ts
    │   ├── auth.module.ts
    │   ├── auth.service.ts
    │   ├── jwt-auth.guard.ts
    │   ├── jwt.strategy.ts
    │   ├── roles.decorator.ts
    │   └── roles.guard.ts
    ├── authors/
    │   ├── ports/
    │   │   └── author.repository.ts
    │   ├── dto/
    │   │   ├── create-author.dto.ts
    │   │   └── update-author.dto.ts
    │   ├── authors.controller.ts
    │   ├── authors.module.ts
    │   └── authors.service.ts
    ├── books/
    │   ├── adapter/
    │   │   └── mongoose-book.repository.ts
    │   ├── ports/
    │   │   └── book.repository.ts
    │   ├── dto/
    │   │   ├── create-book.dto.ts
    │   │   └── update-book.dto.ts
    │   ├── books.controller.ts
    │   ├── books.module.ts
    │   └── books.service.ts
    ├── libraries/
    │   ├── dto/
    │   │   ├── create-library.dto.ts
    │   │   └── update-library.dto.ts
    │   ├── libraries.controller.ts
    │   ├── libraries.module.ts
    │   └── libraries.service.ts
    ├── transactions/
    │   ├── ports/
    │   │   ├── clock.ts
    │   │   └── fine.policy.ts
    │   ├── adapters/
    │   │   └── default-fine.policy.ts
    │   ├── dto/
    │   │   ├── borrow-copy.dto.ts
    │   │   └── return-copy.dto.ts
    │   ├── transactions.controller.ts
    │   ├── transactions.module.ts
    │   └── transactions.service.ts
    └── users/
        ├── adapter/
        │   └── mongoose-user.repository.ts
        ├── ports/
        │   └── user.repository.ts
        ├── dto/
        │   ├── create-user.dto.ts
        │   └── update-user.dto.ts
        ├── users.controller.ts
        ├── users.module.ts
        └── users.service.ts
```
