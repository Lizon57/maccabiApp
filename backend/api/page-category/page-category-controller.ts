import { loggerService } from "../../services/logger-service"
import { pageCategoryService } from "./page-category-service"


const get = async (req: any, res: any) => {
   
}

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


const save = async (req: any, res: any) => {
    
}


const removeById = async (req: any, res: any) => {

}


export const pageCategoryController = {
    get,
    getById,
    save,
    removeById
}
