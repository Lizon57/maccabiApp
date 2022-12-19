import { EntityItem } from "../../../../../../types/entity/entities/entity-item"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { getFormatedList } from "../../../../../../services/util/get-formated-list"


export const SimpleInfoListPreview = ({ info, item }: Props) => {
    let value = getValueByDynamicKey(info.value, item)
    if (!value || !value.length) return <></>


    if (Array.isArray(value) && value.length > 1) {
        value = getFormatedList(value)
    }



    return (
        <div className="entity-details--simple-info-list-preview__container">
            <span className="title">{info.title}</span>
            <span className="value">{value}</span>
        </div>
    )
}


type Props = {
    info: {
        title: string,
        value: string
    },
    item: EntityItem
}