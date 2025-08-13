import { AuthorRepository } from "../repositories/author.repository";
import { IAuthor } from "../interfaces/IAuthor";
export declare class AuthorService {
    private readonly authorRepo;
    constructor(authorRepo: AuthorRepository);
    create(author: IAuthor): Promise<import("../schemas/author.schema").AuthorDocument>;
    getAll(): Promise<import("../schemas/author.schema").AuthorDocument[]>;
    getById(id: string): Promise<import("../schemas/author.schema").AuthorDocument | null>;
    update(id: string, data: Partial<IAuthor>): Promise<import("../schemas/author.schema").AuthorDocument | null>;
    delete(id: string): Promise<import("../schemas/author.schema").AuthorDocument | null>;
}
//# sourceMappingURL=author.service.d.ts.map