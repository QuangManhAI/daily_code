src/
│
├── enums/                         # Khai báo enum dùng chung
│   └── BookGenre.ts
│
├── interfaces/                    # Khai báo interface (hợp đồng dữ liệu)
│   ├── IBook.ts
│   ├── IUser.ts
│   ├── IBorrower.ts
│   ├── ILibrarian.ts
│   ├── IAuthor.ts
│   └── ILibrary.ts
│
├── models/                        # Các class mô tả dữ liệu & hành vi OOP
│   ├── books/
│   │   ├── Book.ts                 # Lớp trừu tượng cho sách
│   │   ├── FictionBook.ts          # Sách tiểu thuyết
│   │   └── NonFictionBook.ts       # Sách phi tiểu thuyết
│   │
│   ├── users/
│   │   ├── User.ts                 # Lớp cơ sở cho người dùng
│   │   ├── Borrower.ts             # Người mượn sách
│   │   └── Librarian.ts            # Thủ thư
│   │
│   ├── Author.ts                   # Tác giả
│   └── BorrowTransaction.ts        # Giao dịch mượn/trả sách
│
├── services/                       # Lớp xử lý nghiệp vụ (Business logic)
│   └── Library.ts
│
├── repositories/                   # Tầng truy cập dữ liệu (CRUD với DB)
│   ├── book.repository.ts
│   ├── author.repository.ts
│   ├── user.repository.ts
│   └── ...
│
├── schemas/                        # Định nghĩa Mongoose schema
│   ├── book.schema.ts
│   ├── author.schema.ts
│   ├── user.schema.ts
│   └── ...
│
├── exceptions/                     # Custom error
│   ├── BookNotAvailableError.ts
│   ├── InvalidBorrowerError.ts
│   └── OverdueError.ts
│
├── utils/                          # Hàm tiện ích
│   └── dateUtils.ts
│
├── database/                       # Kết nối cơ sở dữ liệu
│   └── database.ts
│
├── main.ts                         # Entry point
└── README.md
