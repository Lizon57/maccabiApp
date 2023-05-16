import classNames from "classnames"

import { useSelector } from "react-redux"
import { setSaveEntityItem } from "../../../../../../store/action/save-entity-item-action"
import { RootState } from "../../../../../../store/store"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"
import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"


const OPTIONS = [{ title: 'כן', value: true }, { title: 'לא', value: false }, { title: 'לא ידוע', value: undefined }]


export const BinaryPicker = ({ pickerInfo }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const onPickOption = (value: boolean | undefined) => {
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(value, editedItem, pickerInfo.key)
        setSaveEntityItem(editedItem)
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
                {OPTIONS.map(({ value, title }) => <span
                    key={title}
                    className={classNames('option', { active: isActiveOption(value, pickerInfo) })}
                    onClick={() => onPickOption(value)}
                >
                    {title}
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
    type: string
    title: string
    key: string
    isRequire: boolean
}