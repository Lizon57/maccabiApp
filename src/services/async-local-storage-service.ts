import { EntityItem } from "../types/entity/entities/entity-item"


const query = async<T>(dbName: string, fallBackDB: T[]) => {
    let entities: null | string | T[] = localStorage.getItem(dbName)

    if (!entities) {
        _createDB(dbName, fallBackDB)
        entities = JSON.stringify(fallBackDB)
    }

    entities = JSON.parse(entities) as T[]

    return entities
}


const save = async<T>(item: T, dbName: string, fallBackDB: T[]) => {
    const db = await query(dbName, fallBackDB)

    db.push(item)
    const items = JSON.stringify(db)
    localStorage.setItem(dbName, items)
    return item
}


const replaceEntityItem = async (newItem: EntityItem, dbName: string, fallBackDB: EntityItem[]) => {
    const db = await query(dbName, fallBackDB)

    const existItemIdx = db.findIndex(item => item.id === newItem.id)

    try {
        if (existItemIdx === -1) return await save(newItem, dbName, fallBackDB)
        else {
            const newDB = db.slice()
            newDB.splice(existItemIdx, 1, newItem)
            localStorage.setItem(dbName, JSON.stringify(newDB))
            return newDB
        }
    }
    catch (err) {
        console.log(err)
    }
}



const _createDB = <T>(entityName: string, DB: T[]) => {
    localStorage.setItem(entityName, JSON.stringify(DB))
}


export const asyncLocalStorageService = {
    query,
    save,
    replaceEntityItem
}
