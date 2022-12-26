import { useState } from "react"
import { Link } from "react-router-dom"

import { AiFillEye, AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"

import { getFormatedNumber } from "../../../../services/util/get-formated-number"

import { EntityItem } from "../../../../types/entity/entities/entity-item"

import { DisplayBranchesIconByIds } from "../../../common/branch-icon/display-branches-icon-by-ids"
import { ImageSlider } from "../image-slider/image-slider"


export const SquareEntityPreview = ({ item, fallbackImgUrl }: Props) => {
    const [isLike, setIsLike] = useState(false)
    const toggleIsLike = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        ev.preventDefault()
        setIsLike(!isLike)
    }

    const TOTAL_IMAGE = item?.miniImages?.length || 0


    const { relatedInfo, entityInfo, itemInfo } = item

    return (
        <div className="dynamic-entity-preview--square-entity-preview__container">
            <Link to={item.id} className="details-anchor">
                <div className="title">
                    {relatedInfo?.branchIds && <span className="branch-icon"><DisplayBranchesIconByIds ids={relatedInfo.branchIds} /></span>}
                    <span className="title">{entityInfo.name.display}</span>
                </div>

                <div className="image-container">
                    <span
                        className={"like-icon" + (isLike ? ' active' : '')}
                        title={isLike ? 'הסר מרשימת המועדפים' : 'הוסף לרשימת המועדפים'}
                        onClick={(ev) => toggleIsLike(ev)}>
                        {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                    </span>

                    {TOTAL_IMAGE > 1 && <span className="image-counter" title={`${TOTAL_IMAGE} תמונות תצוגה`}>{TOTAL_IMAGE}</span>}

                    <ImageSlider images={item.miniImages || []} fallbackImgUrl={fallbackImgUrl} />

                    <div className="additional-info">
                        <div className="views-and-rate">
                            <div className="views" title={`${getFormatedNumber(itemInfo.view)} צפיות`}>
                                <span className="icon"><AiFillEye size={11} /></span>
                                <span className="text">{itemInfo.view ? getFormatedNumber(itemInfo.view) : 'לא נצפה'}</span>
                            </div>

                            <div
                                className="rate"
                                title={itemInfo.rate.avg
                                    ? `${itemInfo.rate.avg} כוכבי דירוג (בידי ${getFormatedNumber(itemInfo.rate.raterCount)} מדרגים)`
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
            </Link>
        </div>
    )
}


type Props = {
    item: EntityItem,
    fallbackImgUrl: string
}

