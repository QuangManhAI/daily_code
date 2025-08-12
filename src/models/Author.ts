import type { BookGenre } from "../enums/BookGenre";
import type { IAuthor } from "../interfaces/IAuthor";
import type { IBook } from "../interfaces/IBook";
import { Gender } from "../enums/Gender";

export class Author implements IAuthor {
    constructor(
        public readonly id: string,
        protected age: number,
        protected name: string,
        protected birthDate: Date,
        protected nationality: string,
        protected books: IBook[],
        protected gender?: Gender,
        protected address?: string,
        protected email?: string,
        protected biography?: string,
        protected deathDate?: Date,
        protected genres?: BookGenre[],
        protected awards?: string[],
    ){}

    getId(): string {
        return this.id;
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
        return this.address ?? "";
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


    getBiography(): string | undefined{
        return this.biography;
    }
    setBiography(_biography: string): void{
        this.biography = _biography;
    }

    getNationality():string | undefined{
        return this.nationality;
    }
    setNationality(_nationlity: string) : void{
        this.nationality = _nationlity;
    }

    getBirthdate(): Date {
        return this.birthDate;
    }

    setBirthDate(_birthdate: Date): void{
        this.birthDate = _birthdate;
    }

    getDeathdate(): Date | undefined {
        return this.deathDate;
    }
    setDeathDate(_deathdate: Date): void {
        this.deathDate = _deathdate;
    }

    getGenres(): BookGenre[] | undefined{
        return this.genres;
    }
    serGenres(_bookgenre: BookGenre[]): void{
        this.genres = _bookgenre;
    }

    getBooks(): IBook[] {
        return this.books;
    }
    setBooks(_books: IBook[]): void{
        this.books = _books
    }

    getAwards(): string[] | undefined{
        return this.awards;
    }
    setAwards(_awards: string[]): void{
        this.awards = _awards;
    }
}