import { asyncLocalStorageService } from "../async-local-storage-service"

import { gamePosterType } from "../../types/game-poster"
import { GAME_POSTERS_DB } from "../../data/entities/game-poster/game-posters-db"
import { sortEntityService } from "./sort-entity-service"


const STORAGE_KEY = 'GAME_POSTER_DB'


const query = async (sortBy: sortByType) => {
    let data: gamePosterType[]
    try {
        data = await asyncLocalStorageService.query(STORAGE_KEY, GAME_POSTERS_DB) as gamePosterType[]
        data = sortEntityService.dynamicEntitySort(data, sortBy)
    } catch (err) {
        throw new Error('שגיאה בטעינת נתונים')
    }

    return data

    // DEBUG:
    // Resolve after delay
    // return new Promise(res => setTimeout(() => res(data), 500))

    // Reject:
    // throw new Error('שגיאה מכוונת')
}


export const gamePosterService = {
    query
}


type sortByType = {
    sKey: string,
    sOrder: string
}