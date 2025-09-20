import { ObjectId } from "mongodb";

export default class User {
    _id?: ObjectId;
    name: string;
    email: string;
    passwordHash: string;
    created_at: Date

    constructor(name: string, email: string, passwordHash: string, created_at: Date) {
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.created_at = created_at;
    }
}