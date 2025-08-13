"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    age;
    gender;
    address;
    email;
    constructor(id, name, age, gender, address, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(_name) {
        this.name = _name;
    }
    getAge() {
        return this.age;
    }
    setAge(_age) {
        this.age = _age;
    }
    getGender() {
        return this.gender;
    }
    setGender(_gender) {
        this.gender = _gender;
    }
    getAddress() {
        return this.address || "";
    }
    setAddress(_address) {
        this.address == _address;
    }
    getEmail() {
        return this.email;
    }
    setEmail(_email) {
        this.email == _email;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map