import type { Gender } from "../enums/Gender";

export interface IUser {
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
    setEmail(_email: string) : void;
}