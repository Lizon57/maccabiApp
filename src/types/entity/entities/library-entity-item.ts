import { BasicEntityItem } from "../basic-entity-item"

export type LibraryEntityItem = BasicEntityItem & _LibraryItem

interface _LibraryItem {
    entityInfo: {
        item?: {
            writers?: string[],
            publishers?: string[],
            pageCount?: number,
            publishYear?: number,
        }
    }
}