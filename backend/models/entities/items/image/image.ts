import { EntityItem } from "../misc/entity.item"

export type Image = EntityItem & {
    entityInfo: {
        imageUrl: string
    }
}