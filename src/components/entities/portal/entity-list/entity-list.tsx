import { Link } from "react-router-dom"

import { Entity } from "../../../../types/entity/entity"
import { EntityItem } from "../../../../types/entity/entities/entity-item"

import { ICON_TYPE_MAP } from "../../../../constans/icon-type-map"

import { DynamicEntityPreview } from "../dynamic-entity-preview/dynamic-entity-preview"


export const EntityList = ({ entity, items }: Props) => {
    const PlusIcon = ICON_TYPE_MAP.entityItemPreview.plus


    return (
        <div className="entity-portal--entity-list__container">
            {items.map(item => <DynamicEntityPreview
                key={item.id}
                item={item}
                type={entity.listPageInfo.previewType}
                fallbackImgUrl={entity.entityInfo.image.thumbnail.path}
            />)}

            <div className="add-entity-container" title="הוסף פריט">
                <Link to="save">
                    <span className="icon-wrapper"><PlusIcon size={40} /></span>
                    <span className="text">הוסף פריט</span>
                </Link>
            </div>
        </div>
    )
}


type Props = {
    entity: Entity
    items: EntityItem[]
}