import { ObjectId } from "mongodb"
import { databaseService } from "../../services/database-service"
import { loggerService } from "../../services/logger-service"


const DB_NAME = 'pageCategory'


const getById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const pageCategory = await collection.findOne({ _id: new ObjectId(id) })
        return pageCategory
    } catch (err) {
        loggerService.error('cannot find page category', err)
        throw err
    }
}


export const pageCategoryService = {
    getById,
}