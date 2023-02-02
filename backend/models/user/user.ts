import { ObjectId } from "mongodb"
import { Credential } from "./credential"


export interface User {
    _id: ObjectId | string

    credential: Credential
}

export interface UserWithoutId extends Omit<User, '_id'> { }