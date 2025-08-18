src
├── app.module.ts
├── shared
│   └── tokens.ts
├── config
│   └── connection.ts
├── domain
│   ├── ports
│   │   ├── authors.repo.ts
│   │   ├── books.repo.ts
│   │   ├── copies.repo.ts
│   │   ├── libraries.repo.ts
│   │   ├── tx-repository.port.ts
│   │   └── users.repo.ts
│   ├── policies
│   │   └── fine.policy.ts
│   └── usecases
│       ├── borrow-book.usecase.ts
│       └── return-book.usecase.ts
├── infra
│   └── mongo
│       └── repositories
│           ├── authors.mongo.ts
│           ├── books.mongo.ts
│           ├── copies.mongo.ts
│           ├── libraries.mongo.ts
│           ├── tx-repository.mongo.ts
│           └── users.mongo.ts
├── models
│   ├── author.schema.ts
│   ├── borrow-transaction.schema.ts
│   ├── library.schema.ts
│   ├── users
│   │   └── user.schema.ts
│   └── books
│       ├── book.schema.ts
│       └── book-copies.schema.ts
├── modules
│   ├── authors
│   │   ├── authors.controller.ts
│   │   ├── authors.module.ts
│   │   ├── authors.service.ts
│   │   └── dto
│   │       ├── create-author.dto.ts
│   │       └── update-author.dto.ts
│   ├── books
│   │   ├── books.controller.ts
│   │   ├── books.module.ts
│   │   ├── books.service.ts
│   │   └── dto
│   │       ├── create-book.dto.ts
│   │       └── update-book.dto.ts
│   ├── libraries
│   │   ├── libraries.controller.ts
│   │   ├── libraries.module.ts
│   │   ├── libraries.service.ts
│   │   └── dto
│   │       ├── create-library.dto.ts
│   │       └── update-library.dto.ts
│   ├── transactions
│   │   ├── transactions.controller.ts
│   │   ├── transactions.module.ts
│   │   ├── transactions.service.ts
│   │   └── dto
│   │       ├── borrow-copy.dto.ts
│   │       └── return-copy.dto.ts
│   └── users
│       ├── users.controller.ts
│       ├── users.module.ts
│       ├── users.service.ts
│       └── dto
│           ├── create-user.dto.ts
│           └── update-user.dto.ts