import { LocalUser } from "./local-user"


export interface User extends LocalUser {
    _id: string

    credential: {
        email: string
        password: string
    }

    client: {
        name: {
            first: string
            last: string
            display: string
        }
    }
}