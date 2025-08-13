import type { Gender } from "../../enums/Gender";
import type { IUser } from "../../interfaces/IUser";
export declare abstract class User implements IUser {
    readonly id: string;
    protected name: string;
    protected age: number;
    protected gender?: Gender | undefined;
    protected address?: string | undefined;
    protected email?: string | undefined;
    constructor(id: string, name: string, age: number, gender?: Gender | undefined, address?: string | undefined, email?: string | undefined);
    getId(): string;
    getName(): string;
    setName(_name: string): void;
    getAge(): number;
    setAge(_age: number): void;
    getGender(): Gender | undefined;
    setGender(_gender: Gender): void;
    getAddress(): string;
    setAddress(_address: string): void;
    getEmail(): string | undefined;
    setEmail(_email: string): void;
}
//# sourceMappingURL=User.d.ts.map