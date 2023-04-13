import { SimpleListEntityDetailsCmpInfo } from "../../../../../../models/types/entities/entity-details-structure-cmp/simple-list-entity-details-cmp-info"
import { EntityItem } from "../../../../../../types/entity/entities/entity-item"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { getFormattedList } from "../../../../../../services/util/get-formatted-list"
import { shouldDisplayValue } from "../../../../../../services/util/should-display-value"
import { getFormattedDate } from "../../../../../../services/util/get-formatted-date"
import { getFormattedDurations } from "../../../../../../services/util/get-formatted-durations"


export const SimpleInfoListPreview = ({ info, item }: Props) => {
    let value = getValueByDynamicKey(info.value, item)
    if (!shouldDisplayValue(value) || !value) return <></>

    const getFormattedText = () => {
        switch (info.type) {
            case 'number':
                return value

            case 'list':
                if (value.length) return getFormattedList(value)
                break

            case 'date':
                return getFormattedDate(value, false, false)

            case 'dates-list':
                return getFormattedDurations(value)
        }
    }

    if (info.type === 'boolean' && value) return (
        <div className="entity-details--simple-info-list-preview__container">
            <span className="value-driven">{info.title}</span>
        </div>
    )


    return (
        <div className="entity-details--simple-info-list-preview__container">
            <span className="title">{info.title}</span>
            <span className="value">{getFormattedText()}</span>
        </div>
    )
}


type Props = {
    info: SimpleListEntityDetailsCmpInfo
    item: EntityItem
}