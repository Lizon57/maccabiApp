import { GAME_POSTERS_DB } from "../../data/entities/game-poster/game-posters-db"
import { asyncLocalStorageService } from "../async-local-storage-service"

const STORAGE_KEY = 'GAME_POSTER_DB'

const query = async () => {
    try {
        return await asyncLocalStorageService.query(STORAGE_KEY, GAME_POSTERS_DB)
    } catch (err) {
        throw new Error('שגיאה בטעינת נתונים')
    }
}




export const gamePosterService = {
    query
}