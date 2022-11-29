import { BasicEntityItem } from "../basic-entity-item"

export type ImageEntityItem = BasicEntityItem & _ImageEntityItem

interface _ImageEntityItem {
    entityInfo: {
        imageUrl: string
    }
}