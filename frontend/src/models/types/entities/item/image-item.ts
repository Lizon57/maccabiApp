import { EntityItem } from "./entity-item"


export type ImageItem = EntityItem & {
    entityInfo: {
        imageUrl: string
    }
}