import { loggerService } from "../../services/logger-service"
import { pageCategoryService } from "./page-category-service"


const getById = async (req: any, res: any) => {
    loggerService.debug('Getting signature by id')
    const id = req.params.id

    try {
        const pageCategory = await pageCategoryService.getById(id)
        res.json(pageCategory)
    } catch (err) {
        loggerService.error(`Failed to get page category (${id})`, err)
        res.status(500).send({ err: 'Failed to get entity item' })
    }
}



export const pageCategoryController = {
    getById,
}
