import { EntityItem } from "../../../../types/entity/entities/entity-item"

import { SquareEntityPreview } from "./square-entity-preview"


export const DynamicEntityPreview = ({ item, type, fallbackImgUrl }: Props) => {
    switch (type) {
        case 'square':
            return <SquareEntityPreview item={item} fallbackImgUrl={fallbackImgUrl} />

        default:
            return null
    }
}


type Props = {
    item: EntityItem
    type: string
    fallbackImgUrl: string
}