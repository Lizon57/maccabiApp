import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"
import { setSaveEntityItem } from "../../../../../../store/action/save-entity-item-action"

import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"

import { NON_ZERO_DAYS } from "../../../../../../constans/days"
import { NON_ZERO_MONTHS } from "../../../../../../constans/months"
import { YEARS } from "../../../../../../constans/years"


export const DatePicker = ({ pickerInfo }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const { key, title } = pickerInfo
    const { entityInfo } = item

    const defaultDay = key.endsWith('start') ? entityInfo.item?.dateOfActivity?.start?.day : entityInfo.item?.dateOfActivity?.end?.day
    const defaultMonth = key.endsWith('start') ? entityInfo.item?.dateOfActivity?.start?.month : entityInfo.item?.dateOfActivity?.end?.month
    const defaultYear = key.endsWith('start') ? entityInfo.item?.dateOfActivity?.start?.year : entityInfo.item?.dateOfActivity?.end?.year


    const onPickOption = (value: string, extendKey: string) => {
        let formattedValue: number | undefined

        switch (value) {
            case 'יום':
            case 'חודש':
            case 'שנה':
                formattedValue = undefined
                break

            default:
                formattedValue = +value
        }

        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(formattedValue, editedItem, key + '.' + extendKey)

        setSaveEntityItem(editedItem)
    }


    return (
        <div className="entity-save-cmp--profile-filler-date-picker__container">
            <span className="title">{title}</span>
            <span className="picker">
                <select defaultValue={defaultDay} onChange={({ currentTarget: { value } }) => { onPickOption(value, 'day') }}>
                    {NON_ZERO_DAYS.map(day => <option
                        key={day ? day : 'unknown'}
                        value={day ? day : undefined}
                    >
                        {day ? day : 'יום'}
                    </option>
                    )}
                </select>

                <select defaultValue={defaultMonth} onChange={({ currentTarget: { value } }) => { onPickOption(value, 'month') }}>
                    {NON_ZERO_MONTHS.map((month, idx) => <option
                        key={month ? month : 'unknown'}
                        value={idx ? idx : undefined}
                    >
                        {month ? month : 'חודש'}
                    </option>
                    )}
                </select>

                <select defaultValue={defaultYear} onChange={({ currentTarget: { value } }) => { onPickOption(value, 'year') }}>
                    {YEARS.map(year => <option
                        key={year ? year : 'unknown'}
                        value={year ? year : undefined}
                    >
                        {year ? year : 'שנה'}
                    </option>
                    )}
                </select>
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