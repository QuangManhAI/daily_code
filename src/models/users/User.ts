// Xây dựng lớp User hoàn chỉnh để làm lớp cơ sở cho các lớp khác


import type { Gender } from "../../enums/Gender";
import { Role } from "../../enums/Roles";
import type { IUser } from "../../interfaces/IUser";

export abstract class User implements IUser {
    // hàm khởi tạo với các thuộc tính
    constructor(
        public readonly id: string,
        protected name: string,
        protected age: number,
        protected role: Role, 
        protected gender?: Gender,
        protected address?: string,
        protected email?: string,
    ){}


    // phương thức cơ bản
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
        this.address = _address;
    }

    getEmail(): string | undefined {
        return this.email;
    }

    setEmail(_email: string): void {
        this.email = _email;
    }

    getRole(): Role {
        return this.role;
    }

    setRole(_role: Role): void {
        this.role = _role;
    }

}