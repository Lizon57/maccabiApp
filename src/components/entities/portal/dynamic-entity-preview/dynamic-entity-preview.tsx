import { EntityItem } from "../../../../types/entity/entity-item"
import { SquareEntityPreview } from "./square-entity-preview"

export const DynamicEntityPreview = ({ item, imagePath, type }: Props) => {
    switch (type) {
        case 'square':
            return <SquareEntityPreview item={item} imagePath={imagePath} />

        default:
            return null
    }
}


type Props = {
    item: EntityItem,
    type: string,
    imagePath: string
}