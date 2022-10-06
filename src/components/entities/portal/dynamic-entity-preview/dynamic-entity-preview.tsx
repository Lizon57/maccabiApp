import { EntityItem } from "../../../../types/entity-item"
import { SquareEntityPreview } from "./square-entity-preview"

export const DynamicEntityPreview = ({ item, type }: Props) => {
    switch (type) {
        case 'square':
            return <SquareEntityPreview item={item} />

        default:
            return null
    }
}


type Props = {
    item: EntityItem,
    type: string
}