import { asyncLocalStorage } from "../services/als-service"

export const requireAuth = (req: any, res: any, next: any) => {
    const { loggedinUser } = asyncLocalStorage.getStore() as any
    if (!loggedinUser) return res.status(401).send('Not Authenticated')
    next()
}



export const requireEditor = (req: any, res: any, next: any) => {
    const { loggedinUser } = asyncLocalStorage.getStore() as any
    if (loggedinUser.permisionGroup !== 'editor') return res.status(403).send('Not Authorized')
    next()
}