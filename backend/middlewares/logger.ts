import { loggerService } from "../services/logger.service"

export const logger = async (req: any, res: any, next: any) => {
    loggerService.info('Sample Logger Middleware')
    next()
}
