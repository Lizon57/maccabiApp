import { useState } from "react"
import { AiFillEye, AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"

import { EntityItem } from "../../../../types/entity-item"

import { DisplayBranchIconById } from "../../../common/branch-icon/display-branch-icon-by-id"
import { ImageSlider } from "../image-slider/image-slider"


export const SquareEntityPreview = ({ item, imagePath }: Props) => {
    const [isLike, setIsLike] = useState(false)
    const toggleIsLike = () => setIsLike(!isLike)


    const TOTAL_IMAGE = item.images.length


    const { relatedInfo, entityInfo, itemInfo } = item

    return (
        <div className="dynamic-entity-preview--square-entity-preview__container">
            <div className="title">
                <span className="branch-icon"><DisplayBranchIconById id={relatedInfo.branchId} /></span>
                <span className="title">{entityInfo.name.display}</span>
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

                <div className="additional-info">
                    <div className="views-and-rate">
                        <div className="views" title={`${itemInfo.view} צפיות`}>
                            <span className="icon"><AiFillEye size={11} /></span>
                            <span className="text">{itemInfo.view ? itemInfo.view : 'לא נצפה'}</span>
                        </div>

                        <div
                            className="rate"
                            title={itemInfo.rate.avg
                                ? `${itemInfo.rate.avg} כוכבי דירוג (בידי ${itemInfo.rate.raterCount} מדרגים)`
                                : 'טרם דורג'}>
                            <span className="icon"><AiFillStar size={11} /></span>
                            <span className="text">{itemInfo.rate.avg ? itemInfo.rate.avg : 'ללא דירוג'}</span>
                        </div>
                    </div>

                    <div className="last-edit-date" title={`נערך לאחרונה לפני שנתיים. סה"כ נערך ${itemInfo.editHistory.total} פעמים`}>
                        <span className="icon"><FiEdit2 size={11} /></span>
                        <span className="text">לפני שנתיים</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


type Props = {
    item: EntityItem,
    imagePath: string
}

