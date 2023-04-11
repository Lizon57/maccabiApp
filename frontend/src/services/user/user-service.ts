import axios from "axios"
import { httpService } from "../http-service"
import { makeId } from "../util/make-id"

export const STORAGE_KEY_LOGGEDIN_USER = 'loggedUser'


const signup = async (credential: Credential) => {
    try {
        const newUser = _createUser(credential)
        const user = await httpService.post('auth/signup', newUser)
        localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (!err.response) throw new Error('אנו חווים קשיים בשרת. אנא נסה שנית מאוחר יותר')

            const errMessage=err.response.data.err

            switch (err.response.status) {
                case 500:
                    if (errMessage === 'Email already taken') throw new Error('דואר אלקטרוני בשימוש בידי משתמש אחר')
                    throw new Error('בעיה ברישום לאתר. אנא נסה שנית מאוחר יותר')
            }
        }
        throw err
    }
}

const login = async (credential: Credential) => {
    try {
        const user = await httpService.post('auth/login', credential)
        if (!user) throw new Error('פרטי התחברות שגויים, אנא נסה שנית')
        localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        console.log(err)
        if (axios.isAxiosError(err)) {
            if (!err.response) throw new Error('אנו חווים קשיים בשרת. אנא נסה שנית מאוחר יותר.')

            const errMessage=err.response.data.err

            switch (err.response.status) {
                case 401:
                    if (errMessage === 'Invalid email') throw new Error('לא נמצא משתמש עם כתובת המייל שסופקה')
                    else if (errMessage === 'Google user') throw new Error('זיהוי משתמש זה באמצעות גוגל בלבד')
                    else if (errMessage === 'Invalid password') throw new Error('הסיסמה שגויה')
                    else throw new Error('פרטי התחברות שגויים או שחלה בעיה זמנית בשרת')
            }
        }
        throw err
    }
}

const logout = async () => {
    try {
        await httpService.post('auth/logout')
        localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    } catch (err) {
        throw err
    }
}


const getLoggedinUser = () => {
    const loggedUser = localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    if (!loggedUser) return
    return JSON.parse(loggedUser)
}


export const googleSignupLogin = async (tokenCode: string) => {
    try {
        const user = await httpService.post('auth/googleSignupLogin', { code: tokenCode })
        if (!user) throw new Error('פרטי התחברות שגויים, אנא נסה שנית')
        localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
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
    signup,
    login,
    logout,
    getLoggedinUser,
    googleSignupLogin
}


type Credential = {
    email: string
    password: string
}