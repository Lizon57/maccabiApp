import { EntityItem } from "../../../../types/entity-item"

export const DynamicEntityPreview = ({ item, type }: propsType) => {
    return (
        <pre>
            {JSON.stringify(item, null, 2)}
        </pre>
    )
}


type propsType = {
    item: EntityItem,
    type: string
}