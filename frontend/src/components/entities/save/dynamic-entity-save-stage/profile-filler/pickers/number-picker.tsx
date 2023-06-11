import classNames from "classnames"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"
import { setSaveEntityItem } from "../../../../../../store/action/save-entity-item-action"

import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"
import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"


export const NumberPicker = ({ pickerInfo }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const { option, key: optionKey, title } = pickerInfo
    const min = option?.min || 0
    const max = option?.max || 1000000
    const value = getValueByDynamicKey(optionKey, item)

    const setValue = (value: number | undefined) => {
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(value, editedItem, optionKey)
        setSaveEntityItem(editedItem)
    }

    const onPickValue = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        let actualValue = +value
        if (typeof actualValue !== 'number') return
        if (actualValue > max) setValue(max)
        else if (actualValue < min) setValue(min)
        else setValue(actualValue)
    }

    const clearPick = () => setValue(undefined)


    const inputProps = { min, max }

    return (
        <div className="entity-save-cmp--profile-filler-number-picker__container">
            <span className="title">{title}</span>

            <span className="picker">
                <input
                    type="number"
                    placeholder={`בין ${min} ל-${max}`}
                    {...inputProps}
                    value={typeof value === 'undefined' ? '' : value}
                    onChange={onPickValue}
                />
            </span>

            <span
                className={classNames('unknown-number', { active: (typeof value === 'undefined') })}
                onClick={clearPick}
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
            min?: number
            max?: number
        }
    }
}