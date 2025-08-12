export interface IUser {
    id: string;
    name: string;
    age: number;
    gender?: "Male" | "Female" | "Other"
    address?: string;
    email?: string;
}