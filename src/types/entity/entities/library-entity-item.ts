import { EntityItem } from "../entity-item"

export type LibraryEntityItem = _LibraryItem & EntityItem


interface _LibraryItem {
    entityInfo: {
        item?: {
            pageCount?: number
            publishYear?: number
        }
    }
}