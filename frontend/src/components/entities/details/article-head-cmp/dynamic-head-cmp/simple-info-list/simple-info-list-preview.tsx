import { SimpleListEntityDetailsCmpInfo } from "../../../../../../models/types/entities/entity-details-structure-cmp/simple-list-entity-details-cmp-info"
import { EntityItem } from "../../../../../../types/entity/entities/entity-item"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { getFormatedList } from "../../../../../../services/util/get-formated-list"
import { shouldDisplayValue } from "../../../../../../services/util/should-display-value"
import { getFormatedDate } from "../../../../../../services/util/get-formated-date"


export const SimpleInfoListPreview = ({ info, item }: Props) => {
    let value = getValueByDynamicKey(info.value, item)
    if (!shouldDisplayValue(value) || !value) return <></>

    const getFormatedText = () => {
        switch (info.type) {
            case 'number':
                return value

            case 'list':
                if (value.length) return getFormatedList(value)
                break

            case 'date':
                return getFormatedDate(value, false, false)

            case 'dates-list':
                const formatter = new Intl.ListFormat('he')
                const dates = value.map((date: any) => {
                    let formatedText = ''
                    if (date.start?.year) formatedText += `החל מ-${getFormatedDate(date.start, false, false)}`
                    if (date.end?.year) {
                        if (date.start?.year) formatedText += ' ו'
                        formatedText += `עד ל-${getFormatedDate(date.end, false, false)}`
                    }
                    return formatedText
                })
                return formatter.format(dates)
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
            <span className="value">{getFormatedText()}</span>
        </div>
    )
}


type Props = {
    info: SimpleListEntityDetailsCmpInfo
    item: EntityItem
}