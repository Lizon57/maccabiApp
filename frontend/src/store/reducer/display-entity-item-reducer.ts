import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"
import { EntityItem } from "../../models/types/entities/item/entity-item"


const initialState: DisplayEntityItemReducer = {
    item: emptyEntityItemService.get('')
}


export const displayEntityItemReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'clearDisplayEntityItem':
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