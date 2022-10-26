import { Link } from "react-router-dom"
import { AiOutlinePlus } from "react-icons/ai"

import { Entity } from "../../../../types/entity/entity"
import { EntityItem } from "../../../../types/entity/entity-item"

import { DynamicEntityPreview } from "../dynamic-entity-preview/dynamic-entity-preview"


export const EntityList = ({ entity, items, imagePath }: Props) => {
    return (
        <div className={"entity-portal--entitiy-list__container" + (items.length < 4 ? ' short-list' : '')}>
            {items.map(item => <DynamicEntityPreview
                key={item.id}
                item={item}
                type={entity.listPageInfo.previewType}
                imagePath={imagePath} />)}

            <div className="add-entity-container" title="הוסף פריט">
                <Link to="add">
                    <span className="icon-wrapper"><AiOutlinePlus size={40} /></span>
                    <span className="text">הוסף פריט</span>
                </Link>
            </div>
        </div>
    )
}


type Props = {
    entity: Entity,
    items: EntityItem[],
    imagePath: string
}