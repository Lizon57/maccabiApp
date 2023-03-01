import { loggerService } from "../../services/logger-service"
import { userService } from "./user-service"


const getUsers = async (req: any, res: any) => {
    try {
        const users = await userService.query()
        res.send(users)
    } catch (err) {
        loggerService.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}


const getUser = async (req: any, res: any) => {
    try {
        const user = await userService.getById(req.params.id)
        res.send(user)
    } catch (err) {
        loggerService.error('Failed to get user', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}


const save = async (req: any, res: any) => {
    try {
        let user = req.body
        if (user._id) user = await userService.update(user)
        else user = await userService.add(user)
        res.send(user)
    } catch (err) {
        loggerService.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}


export const userController = {
    getUser,
    getUsers,
    save
}