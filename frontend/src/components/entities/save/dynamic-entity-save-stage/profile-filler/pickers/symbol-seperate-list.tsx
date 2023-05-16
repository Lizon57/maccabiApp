import classNames from "classnames"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"
import { setSaveEntityItem } from "../../../../../../store/action/save-entity-item-action"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"


export const SymbolSeperateList = ({ pickerInfo }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const { key, title, option } = pickerInfo

    const delimiter = option?.delimiter
    const actualValue = getValueByDynamicKey(key, item)
    let valueAsStr = getValueByDynamicKey(key, item) || []
    valueAsStr = valueAsStr.join(delimiter)
    valueAsStr = valueAsStr.replace(delimiter, delimiter + ' ')

    const setValue = (value: string[] | undefined) => {
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(value, editedItem, key)
        setSaveEntityItem(editedItem)
    }


    const onPickValue = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        const actualValue = value.split(delimiter || '')
        setValue(actualValue)
    }


    return (
        <div className="entity-save-cmp--profile-filler-sybol-seperate-list__container">
            <span className="title">{title}</span>

            <input
                type="text"
                placeholder={`הזן ${title} (הפרדה עם ${delimiter})`}
                value={valueAsStr || ''}
                onChange={onPickValue}
            />

            <span
                className={classNames('unknown-list', { active: (typeof actualValue === 'undefined') })}
                onClick={() => setValue(undefined)}
            >
                לא ידוע
            </span>
        </div>
    )
}


type Props = {
    pickerInfo: {
        type: string
        title: string
        key: string
        isRequire: boolean

        option?: {
            delimiter?: string
        }
    }
}