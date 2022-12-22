import { useStoreDispatch } from "../../../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { updateItem } from "../../../../../../store/slicer/entity-save-slicer"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"


const OPTIONS = [{ title: 'כן', value: true }, { title: 'לא', value: false }, { title: 'לא ידוע', value: undefined }]


export const BinaryPicker = ({ pickerInfo }: Props) => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const onPickOption = (value: boolean | undefined) => {
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(value, editedItem, pickerInfo.key)

        dispatch(updateItem(editedItem))
    }


    const isActiveOption = (value: boolean | undefined, pickerInfo: PickerInfo) => {
        const actualValue = getValueByDynamicKey(pickerInfo.key, item)

        if (actualValue === 'undefined' && typeof value === 'undefined') return true
        if (actualValue === value) return true
        return false
    }


    return (
        <div className="entity-save-cmp--profile-filler-binary-picker__container">
            <span className="title">{pickerInfo.title}</span>
            <span className="options">
                {OPTIONS.map(option => <span
                    key={option.title}
                    className={"option" + ((isActiveOption(option.value, pickerInfo)) ? ' active' : '')}
                    onClick={() => onPickOption(option.value)}
                >
                    {option.title}
                </span>
                )}
            </span>
        </div>
    )
}



type Props = {
    pickerInfo: PickerInfo
}


type PickerInfo = {
    type: string,
    title: string
    key: string,
    isRequire: boolean
}