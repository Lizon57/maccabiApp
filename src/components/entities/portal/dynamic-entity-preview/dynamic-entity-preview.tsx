import { EntityItem } from "../../../../types/entity/entities/entity-item"

import { SquareEntityPreview } from "./square-entity-preview"


export const DynamicEntityPreview = ({ item, type }: Props) => {
    switch (type) {
        case 'square':
            return <SquareEntityPreview item={item} />

        case 'detailed-square':
            return <SquareEntityPreview item={item} />

        default:
            return null
    }
}


type Props = {
    item: EntityItem,
    type: string,
}