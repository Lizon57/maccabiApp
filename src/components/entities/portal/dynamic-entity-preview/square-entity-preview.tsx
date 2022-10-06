import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import { EntityItem } from "../../../../types/entity-item"

import { DisplayBranchIconById } from "../../../common/branch-icon/display-branch-icon-by-id"
import { ImageSlider } from "../image-slider/image-slider"


export const SquareEntityPreview = ({ item, imagePath }: Props) => {
    const [isLike, setIsLike] = useState(false)
    const toggleIsLike = () => setIsLike(!isLike)


    const TOTAL_IMAGE = item.images.length


    return (
        <div className="dynamic-entity-preview--square-entity-preview__container">
            <div className="title">
                <span className="branch-icon"><DisplayBranchIconById id={item.relatedInfo.branchId} /></span>
                <span className="title">{item.entityInfo.name.display}</span>
            </div>

            <div className="image-container">
                <span
                    className={"like-icon" + (isLike ? ' active' : '')}
                    title={isLike ? 'הסר מרשימת המועדפים' : 'הוסף לרשימת המועדפים'}
                    onClick={toggleIsLike}>
                    {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>

                {TOTAL_IMAGE > 1 && <span className="image-counter" title={`${TOTAL_IMAGE} תמונות תצוגה`}>{TOTAL_IMAGE}</span>}

                <ImageSlider imagePath={imagePath} images={item.images} />
            </div>
        </div>
    )
}


type Props = {
    item: EntityItem,
    imagePath: string
}

