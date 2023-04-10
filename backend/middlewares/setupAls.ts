import { authService } from "../api/auth/auth-service"
import { asyncLocalStorage } from "../services/als-service"


export const setupAsyncLocalStorage = (req: any, res: any, next: any) => {
  const storage = {}

  asyncLocalStorage.run(storage, () => {
    if (!req.cookies) return next()
    const loggedinUser = authService.validateToken(req.cookies.loginTokenz)

    if (loggedinUser) {
      const alsStore = asyncLocalStorage.getStore() as any
      alsStore.loggedinUser = loggedinUser
    }

    next()
  })
}
