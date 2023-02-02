import { Entity } from "../../types/entity/entity"


const initialState: DisplayEntityReducer = {
    entity: {} as Entity
}


export const displayEntityReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'clearDisplayEntity':
            return { ...state, entity: {} as Entity }

        case 'updateDisplayEntity':
            return { ...state, entity: action.entity }

        default:
            return state
    }
}


type DisplayEntityReducer = {
    entity: Entity
}


type Action = {
    [key: string]: any
}