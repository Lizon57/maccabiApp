import { Db, MongoClient } from "mongodb"
import { loggerService } from "./logger-service"
import { config as mongoConfig } from "../config/mongo"


let connectedDb: (Db | null) = null

const getCollection = async (collectionName: string) => {
    try {
        const db = await _connect()
        return db.collection(collectionName)
    } catch (err) {
        loggerService.error('Failed to get Mongo collection', err)
        throw err
    }
}


const _connect = async () => {
    if (connectedDb) return connectedDb

    try {
        const client = await MongoClient.connect(mongoConfig.dbURL)
        const db = client.db(mongoConfig.dbName)
        connectedDb = db
        return db
    } catch (err) {
        loggerService.error('Cannot Connect to DB', err)
        throw err
    }
}


export const databaseService = {
    getCollection
}