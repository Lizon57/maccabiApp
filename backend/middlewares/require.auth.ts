import { asyncLocalStorage } from "./../services/als.service"

export const requireAuth = (req: any, res: any, next: any) => {
    const { loggedinUser } = asyncLocalStorage.getStore() as any
    if (!loggedinUser) return res.status(401).send('Not Authenticated')
    next()
}