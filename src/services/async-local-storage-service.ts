const query = async<T>(entityName: string, fallBackDB: T[]) => {
    let entities: null | string | T[] = localStorage.getItem(entityName)

    if (!entities) {
        _createDB(entityName, fallBackDB)
        entities = JSON.stringify(fallBackDB)
    }

    entities = JSON.parse(entities) as T[]

    return entities
}



const _createDB = <T>(entityName: string, DB: T[]) => {
    localStorage.setItem(entityName, JSON.stringify(DB))
}


export const asyncLocalStorageService = {
    query,
}
