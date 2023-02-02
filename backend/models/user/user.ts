import { ObjectId } from "mongodb"
import { Credential } from "./credential"


export interface User {
    _id: ObjectId | string

    credential: Credential

    client: {
        name: {
            first: string,
            last: string,
            display: string,
        }
    },

    browseableBranchesIds: string[]
}

export interface UserWithoutId extends Omit<User, '_id'> { }