import { Credential } from "../../types/user/credential"
import { LocalUser } from "./local-user"


export interface User extends LocalUser {
    _id: string

    credential: Credential

    client: {
        name: {
            first: string
            last: string
            display: string
        }
    }

    browseableBranchesIds: string[],

    likedPageMap?: { [key: string]: string[] }

    permisionGroup?: string
}

export interface UserWithoutId extends Omit<User, '_id'> { }