import { makeId } from "../services/util/make-id"

import { GamePosterList } from "../pages/game-poster/game-poster-list"


export const APP_ROUTES = [
    {
        id: makeId(),
        path: 'כרזות משחק',
        element: GamePosterList
    }
]