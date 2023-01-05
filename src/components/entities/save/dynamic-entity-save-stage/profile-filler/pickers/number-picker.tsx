import { useStoreDispatch } from "../../../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { updateItem } from "../../../../../../store/slicer/entity-save-slicer"

import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"
import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"

export const NumberPicker = ({ pickerInfo }: Props) => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const { option, key: optionKey, title } = pickerInfo

    const min = option?.min || 0
    const max = option?.max || 1000000


    const value = getValueByDynamicKey(optionKey, item)

    const setValue = (value: number | undefined) => {
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(value, editedItem, optionKey)
        dispatch(updateItem(editedItem))
    }

    const onPickValue = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        let actualValue = +value
        if (typeof actualValue !== 'number') return
        if (actualValue > max) setValue(max)
        else if (actualValue < min) setValue(min)
        else setValue(undefined)
    }

    const clearPick = () => setValue(undefined)


    const inputProps = { min, max, value }

    return (
        <div className="entity-save-cmp--profile-filler-number-picker__container">
            <span className="title">{title}</span>

            <span className="picker">
                <input
                    type="number"
                    placeholder={`בין ${min} ל-${max}`}
                    {...inputProps}
                    onChange={onPickValue}
                />
            </span>

            <span
                className={"unknown-number" + ((typeof value === 'undefined') ? ' active' : '')}
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