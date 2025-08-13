import { Model } from 'mongoose';
import { AuthorDocument } from '../schemas/author.schema';
import { IAuthor } from '../interfaces/IAuthor';
export declare class AuthorRepository {
    private readonly authorModel;
    constructor(authorModel: Model<AuthorDocument>);
    create(data: IAuthor): Promise<AuthorDocument>;
    findAll(): Promise<AuthorDocument[]>;
    findById(id: string): Promise<AuthorDocument | null>;
    update(id: string, data: Partial<IAuthor>): Promise<AuthorDocument | null>;
    delete(id: string): Promise<AuthorDocument | null>;
}
//# sourceMappingURL=author.repository.d.ts.map