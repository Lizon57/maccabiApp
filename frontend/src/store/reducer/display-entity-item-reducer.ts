import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"

import { EntityItem } from "../../types/entity/entities/entity-item"


const initialState: DisplayEntityItemReducer = {
    item: emptyEntityItemService.get('')
}


export const displayEntityItemReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'setEmptyDisplayEntityItem':
            return { ...state, item: emptyEntityItemService.get('') }

        case 'updateDisplayEntityItem':
            return { ...state, item: action.editedItem }

        default:
            return state
    }
}


type DisplayEntityItemReducer = {
    item: EntityItem
}


type Action = {
    [key: string]: any
}