import type { Gender } from "../../enums/Gender";
import type { IUser } from "../../interfaces/IUser";

export abstract class User implements IUser {
    constructor(
        public readonly id: string,
        protected name: string,
        protected age: number,
        protected gender?: Gender,
        protected address?: string,
        protected email?: string,
    ){}

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name;
    }

    setName(_name: string): void {
        this.name = _name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(_age: number): void {
        this.age = _age;
    }

    getGender(): Gender | undefined {
        return this.gender;
    }

    setGender(_gender: Gender): void {
        this.gender = _gender;
    }

    getAddress(): string {
        return this.address || "";
    }

    setAddress(_address: string): void {
        this.address == _address;
    }

    getEmail(): string | undefined {
        return this.email;
    }

    setEmail(_email: string): void {
        this.email == _email;
    }

}