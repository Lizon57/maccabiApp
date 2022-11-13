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



const _createDB = <T>(entityName: string, DB: T[]) => {
    localStorage.setItem(entityName, JSON.stringify(DB))
}


export const asyncLocalStorageService = {
    query,
    save
}
