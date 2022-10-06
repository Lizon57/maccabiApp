import { EntityItem } from "../../../../types/entity-item"

import { DisplayBranchIconById } from "../../../common/branch-icon/display-branch-icon-by-id"
import { ImageSlider } from "../image-slider/image-slider"


export const SquareEntityPreview = ({ item, imagePath }: Props) => {
    return (
        <div className="dynamic-entity-preview--square-entity-preview__container">
            <div className="title">
                <span className="branch-icon"><DisplayBranchIconById id={item.relatedInfo.branchId} /></span>
                <span className="title">{item.entityInfo.name.display}</span>
            </div>

            <ImageSlider imagePath={imagePath} images={item.images} />
        </div>
    )
}


type Props = {
    item: EntityItem,
    imagePath: string
}

