"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    id;
    age;
    name;
    birthDate;
    nationality;
    books;
    role;
    gender;
    address;
    email;
    biography;
    deathDate;
    genres;
    awards;
    constructor(id, age, name, birthDate, nationality, books, role, gender, address, email, biography, deathDate, genres, awards) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.birthDate = birthDate;
        this.nationality = nationality;
        this.books = books;
        this.role = role;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.biography = biography;
        this.deathDate = deathDate;
        this.genres = genres;
        this.awards = awards;
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
        return this.address ?? "";
    }
    setAddress(_address) {
        this.address = _address;
    }
    getEmail() {
        return this.email;
    }
    setEmail(_email) {
        this.email = _email;
    }
    getBiography() {
        return this.biography;
    }
    setBiography(_biography) {
        this.biography = _biography;
    }
    getNationality() {
        return this.nationality;
    }
    setNationality(_nationlity) {
        this.nationality = _nationlity;
    }
    getBirthdate() {
        return this.birthDate;
    }
    setBirthDate(_birthdate) {
        this.birthDate = _birthdate;
    }
    getDeathdate() {
        return this.deathDate;
    }
    setDeathDate(_deathdate) {
        this.deathDate = _deathdate;
    }
    getGenres() {
        return this.genres;
    }
    serGenres(_bookgenre) {
        this.genres = _bookgenre;
    }
    getBooks() {
        return this.books;
    }
    setBooks(_books) {
        this.books = _books;
    }
    getAwards() {
        return this.awards;
    }
    setAwards(_awards) {
        this.awards = _awards;
    }
    getRole() {
        return this.role;
    }
    setRole(_role) {
        this.role = _role;
    }
}
exports.Author = Author;
//# sourceMappingURL=Author.js.map