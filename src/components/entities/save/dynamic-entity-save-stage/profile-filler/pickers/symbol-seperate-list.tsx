import { useStoreDispatch } from "../../../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { updateItem } from "../../../../../../store/slicer/entity-save-slicer"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"


export const SymbolSeperateList = ({ pickerInfo }: Props) => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const { key, title, option } = pickerInfo

    const delimiter = option?.delimiter
    const actualValue = getValueByDynamicKey(key, item)
    let valueAsStr = getValueByDynamicKey(key, item) || []
    valueAsStr = valueAsStr.join(delimiter)
    valueAsStr = valueAsStr.replace(delimiter, delimiter + ' ')

    const setValue = (value: string[] | undefined) => {
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(value, editedItem, key)
        dispatch(updateItem(editedItem))
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
                className={"unknown-list" + ((typeof actualValue === 'undefined') ? ' active' : '')}
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