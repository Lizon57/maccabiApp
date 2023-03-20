import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"
import { EntityItem } from "../../models/types/entities/item/entity-item"


const initialState: SaveEntityItemReducer = {
    item: emptyEntityItemService.get('')
}


export const saveEntityItemReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'clearSaveEntityItem':
            return { ...state, item: emptyEntityItemService.get('') }

        case 'setSaveEntityItem':
            return { ...state, item: action.item }

        default:
            return state
    }
}


type SaveEntityItemReducer = {
    item: EntityItem
}


type Action = {
    [key: string]: any
}