import { Entity } from "../../../../types/entity"
import { EntityItem } from "../../../../types/entity-item"

import { DynamicEntityPreview } from "../dynamic-entity-preview/dynamic-entity-preview"


export const EntityList = ({ entity, items }: propsType) => {
    return (
        <div className="entity-portal--entitiy-list__container">
            {items.map(item => <DynamicEntityPreview
                key={item.id}
                item={item}
                type={entity.listPageInfo.previewType} />)}
        </div>
    )
}


type propsType = {
    entity: Entity,
    items: EntityItem[]
}