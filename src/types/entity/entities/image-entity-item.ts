import { EntityItem } from "../entity-item"

export type ImageEntityItem = _ImageEntityItem & EntityItem

type _ImageEntityItem = {
    entityInfo: {
        imageUrl: string
    }
}