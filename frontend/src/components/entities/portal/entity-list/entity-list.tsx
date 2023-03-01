import { Link } from "react-router-dom"

import { Entity } from "../../../../models/interfaces/entities/entity"
import { EntityItem } from "../../../../models/types/entities/item/entity-item"

import { ICON_TYPE_MAP } from "../../../../constans/icon-type-map"

import { DynamicEntityPreview } from "../dynamic-entity-preview/dynamic-entity-preview"


const PlusIcon = ICON_TYPE_MAP.entityItemPreview.plus

export const EntityList = ({ entity, items }: Props) => {
    return (
        <div className="entity-portal--entity-list__container">
            <div className="add-entity-container" title="הוסף פריט">
                <Link to="save">
                    <span className="icon-wrapper"><PlusIcon size={40} /></span>
                    <span className="text">הוסף פריט</span>
                </Link>
            </div>

            {items.map(item => <DynamicEntityPreview
                key={item._id}
                item={item}
                type={entity.listPageInfo.previewType}
                fallbackImgUrl={entity.entityInfo.image.thumbnail.path}
            />)}
        </div>
    )
}


type Props = {
    entity: Entity
    items: EntityItem[]
}