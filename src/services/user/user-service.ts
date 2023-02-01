import { USER_DB } from "../../data/user/user-db"
import { User } from "../../models/interfaces/user/user"

import { asyncLocalStorageService } from "../async-local-storage-service"
import { makeId } from "../util/make-id"


const DB_NAME = 'UserDB'

const query = async () => {
    try {
        const users = await asyncLocalStorageService.query(DB_NAME, USER_DB) as User[]
        return users
    } catch (err) {
        throw err
    }
}

const signup = async (credential: Credential) => {
    try {
        const users = await query()
        const isUserExist = !!users.find(user => (user.credential.email === credential.email))
        if (isUserExist) throw new Error('משתמש קיים במערכת, אנא נסה שנית')

        const user = _createUser(credential) as unknown
        await asyncLocalStorageService.save(user, DB_NAME, USER_DB)
        return user
    } catch (err) {
        throw err
    }
}

const login = async (credential: Credential) => {
    try {
        const users = await query()
        const user = users.find(user => (user.credential.email === credential.email) && (user.credential.password === credential.password))
        if (!user) throw new Error('פרטי התחברות שגויים, אנא נסה שנית')
        return user
    } catch (err) {
        throw err
    }
}


const _createUser = (credential: Credential) => ({
    _id: makeId(),
    credential: {
        email: credential.email,
        password: credential.password
    },
    client: {
        name: {
            first: '',
            last: '',
            display: '',
        }
    },
    browseableBranchesIds: ['branchId00001', 'branchId00002', 'branchId00003']
})


export const userService = {
    query,
    signup,
    login
}


type Credential = {
    email: string
    password: string
}