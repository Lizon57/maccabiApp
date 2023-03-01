import { authService } from "./auth-service"
import { loggerService } from "../../services/logger-service"


const login = async (req: any, res: any) => {
    const { email, password } = req.body

    try {
        const user = await authService.login(email, password)
        const loginToken = authService.getLoginToken(user)
        loggerService.info('User login: ', user)
        res.cookie('loginToken', loginToken, { secure: true, maxAge: 1000 * 60 * 24 * 7 })
        res.json(user)
    } catch (err) {
        loggerService.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}


const signup = async (req: any, res: any) => {
    try {
        const user = req.body
        await authService.signup(user)
        loggerService.debug(`auth.route - new account created: ${user.credential.email}`)
        const loggedUser = await authService.login(user.credential.email, user.credential.password)
        loggerService.info('User signup:', loggedUser)
        delete loggedUser.credential.password
        const loginToken = authService.getLoginToken(loggedUser)
        res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
        res.json(loggedUser)
    } catch (err) {
        loggerService.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}


const logout = (req: any, res: any) => {
    try {
        res.clearCookie('loginToken')
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}


export const authController = {
    login,
    signup,
    logout
}