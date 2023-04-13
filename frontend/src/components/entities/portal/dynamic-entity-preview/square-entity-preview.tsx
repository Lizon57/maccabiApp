import { useState } from "react"
import { Link } from "react-router-dom"

import { getFormattedNumber } from "../../../../services/util/get-formatted-number"
import { getRelativePastTime } from "../../../../services/util/get-relative-past-time"

import { EntityItem } from "../../../../models/types/entities/item/entity-item"

import { ICON_TYPE_MAP } from "../../../../constans/icon-type-map"

import { DisplayBranchesIconByIds } from "../../../common/branch-icon/display-branches-icon-by-ids"
import { ImageSlider } from "../image-slider/image-slider"

const GET_LITERAL_EDIT_AMOUNT = (amount: number) => {
    if (amount === 1) return 'פעם אחת'
    else if (amount === 2) return 'פעמיים'
    else return `${amount} פעמים`
}


export const SquareEntityPreview = ({ item, fallbackImgUrl }: Props) => {
    const [isLike, setIsLike] = useState(false)

    const toggleIsLike = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        ev.preventDefault()
        setIsLike(!isLike)
    }


    const totalImageCount = item.miniImages?.length || 0
    const { fillHeart: FillHeartIcon, outlineHeart: OutlineHeartIcon, view: ViewIcon,
        rate: RateIcon, edit: EditIcon } = ICON_TYPE_MAP.entityItemPreview
    const { relatedInfo, entityInfo, itemInfo: { view, rate, history } } = item

    const relativePastTime = getRelativePastTime(history.lastEditDate)

    return (
        <Link to={item._id} className="dynamic-entity-preview--square-entity-preview__container">
            <div className="image-container">
                <ImageSlider images={item.miniImages || []} fallbackImgUrl={fallbackImgUrl} />

                <span
                    className={"like-icon" + (isLike ? ' active' : '')}
                    title={isLike ? 'הסר מרשימת המועדפים' : 'הוסף לרשימת המועדפים'}
                    onClick={toggleIsLike}>
                    {isLike ? <FillHeartIcon /> : <OutlineHeartIcon />}
                </span>

                {totalImageCount > 1 && <span className="image-counter" title={`${totalImageCount} תמונות תצוגה`}>{totalImageCount}</span>}
            </div>

            <div className="title">
                {relatedInfo?.branchIds && <span className="branch-icon"><DisplayBranchesIconByIds ids={relatedInfo.branchIds} /></span>}
                <span className="title">{entityInfo.name.display}</span>
            </div>


            <div className="item-additional-info">
                <div className="views-and-rate">
                    <div className="views" title={`${getFormattedNumber(view)} צפיות`}>
                        <span className="icon"><ViewIcon size={11} /></span>
                        <span className="text">{view ? getFormattedNumber(view) : 'לא נצפה'}</span>
                    </div>

                    <div
                        className="rate"
                        title={rate.avg
                            ? `${rate.avg} כוכבי דירוג (בידי ${getFormattedNumber(rate.raterCount)} מדרגים)`
                            : 'טרם דורג'}>
                        <span className="icon"><RateIcon size={11} /></span>
                        <span className="text">{rate.avg ? rate.avg : 'ללא דירוג'}</span>
                    </div>
                </div>

                <div
                    className="last-edit-date"
                    title={(history.totalEditCount)
                        ? `נערך לאחרונה ${relativePastTime}. סה"כ נערך ${GET_LITERAL_EDIT_AMOUNT(history.totalEditCount)}`
                        : 'טרם נערך'}
                >
                    <span className="icon"><EditIcon size={11} /></span>
                    <span className="text">{relativePastTime ? relativePastTime : 'טרם נערך'}</span>
                </div>
            </div>
        </Link >
    )
}


type Props = {
    item: EntityItem
    fallbackImgUrl: string
}

