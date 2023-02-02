import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"

import { getFormatedNumber } from "../../../../services/util/get-formated-number"
import { RateStarPreview } from "./rate-star-preview"


export const Rater = () => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)


    return (
        <div className="entity-details--rater__container">
            <div className="stars-list">
                {[5, 4, 3, 2, 1].map((starNum) => <RateStarPreview filledStar={starNum} />)}
            </div>

            <span className="divider"></span>

            <div className="avg-indicator">{getFormatedNumber(item.itemInfo.rate.raterCount)} מדרגים</div>
        </div>
    )
}