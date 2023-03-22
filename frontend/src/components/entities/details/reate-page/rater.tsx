import uuid from 'react-uuid'

import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"
import { insertAppMessage } from '../../../../store/action/app-state-action'
import { updateDisplayEntityItem } from '../../../../store/action/display-entity-item-action'

import { entityItemService } from '../../../../services/entities/entity-item-service'
import { getFormatedNumber } from "../../../../services/util/get-formated-number"
import { eventBus } from '../../../../services/event-bus-service'

import { EntityItem } from '../../../../models/types/entities/item/entity-item'

import { RateStarPreview } from "./rate-star-preview"


export const Rater = () => {
    const { user } = useSelector((state: RootState) => state.userStateModule)
    const { entity } = useSelector((state: RootState) => state.displayEntityModule)
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)


    const onRatePage = async (idx: number) => {
        eventBus.emit('closeDropdown')

        const rate = 5 - idx
        try {
            const newRateData = await entityItemService.setEntityItemRate(entity.name, item._id, rate)
            const updatedItem = structuredClone(item) as EntityItem
            updatedItem.itemInfo.rate = newRateData
            updateDisplayEntityItem(updatedItem)
            insertAppMessage({ text: `דירוג הדף ${item?.entityInfo.name.display} בוצע בהצלחה`, title: 'דירוג הצליח', type: 'success' })
        } catch (err) {
            insertAppMessage({ text: `דירוג הדף ${item?.entityInfo.name.display} נכשל`, title: 'דירוג נכשל', type: 'fail' })
        } finally {
        }
    }


    const isUserActualRate = (rate: number) => {
        if (item.itemInfo.rate.rateMap[user._id] === 5 - rate) return true
        return false
    }


    return (
        <div className="entity-details--rater__container">
            <div className="stars-list">
                {[5, 4, 3, 2, 1].map((starNum, idx) => <div
                    key={uuid()}
                    onClick={() => onRatePage(idx)}
                >
                    <RateStarPreview filledStar={starNum} />
                    {isUserActualRate(idx) && <span className="actual-rate-indicator">(הבחירה שלי)</span>}
                </div>
                )}
            </div>

            <span className="divider"></span>

            <div className="avg-indicator">{getFormatedNumber(item.itemInfo.rate.raterCount)} מדרגים</div>
        </div>
    )
}