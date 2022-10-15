import { AiOutlinePlus } from "react-icons/ai"

import { Entity } from "../../../../types/entity/entity"
import { EntityItem } from "../../../../types/entity/entity-item"

import { DynamicEntityPreview } from "../dynamic-entity-preview/dynamic-entity-preview"


export const EntityList = ({ entity, items, imagePath }: Props) => {
    return (
        <div className={"entity-portal--entitiy-list__container" + (items.length < 5 ? ' short-list' : '')}>
            {items.map(item => <DynamicEntityPreview
                key={item.id}
                item={item}
                type={entity.listPageInfo.previewType}
                imagePath={imagePath} />)}

            <div className="add-entity-container" title="הוסף פריט">
                <span className="icon-wrapper"><AiOutlinePlus size={40} /></span>
                <span className="text">הוסף פריט</span>
            </div>
        </div>
    )
}


type Props = {
    entity: Entity,
    items: EntityItem[],
    imagePath: string
}