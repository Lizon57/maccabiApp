import { useStoreDispatch } from "../../../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { updateItem } from "../../../../../../store/slicer/entity-save-slicer"

import { recursiveValueSetterByKey } from "../../../../../../services/util/recursive-value-setter-by-key"


const DAYS = [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const MONTHS = [undefined, 'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']

const YEARS: (number | undefined)[] = [undefined]
for (let i = 1850; i <= new Date().getFullYear(); i++) {
    YEARS.push(i)
}




export const DatePicker = ({ pickerInfo }: Props) => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)


    const defaultDay = pickerInfo.key.endsWith('start') ? item.entityInfo.item?.dateOfActivity?.start?.day : item.entityInfo.item?.dateOfActivity?.end?.day
    const defaultMonth = pickerInfo.key.endsWith('start') ? item.entityInfo.item?.dateOfActivity?.start?.month : item.entityInfo.item?.dateOfActivity?.end?.month
    const defaultYear = pickerInfo.key.endsWith('start') ? item.entityInfo.item?.dateOfActivity?.start?.year : item.entityInfo.item?.dateOfActivity?.end?.year


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
        recursiveValueSetterByKey(formattedValue, editedItem, pickerInfo.key + '.' + extendKey)

        dispatch(updateItem(editedItem))
    }


    return (
        <div className="entity-save-cmp--profile-filler-date-picker__container">
            <span className="title">{pickerInfo.title}</span>
            <span className="picker">
                <select defaultValue={defaultDay} onChange={({ currentTarget: { value } }) => { onPickOption(value, 'day') }}>
                    {DAYS.map(day => <option
                        key={day ? day : 'unknown'}
                        value={day ? day : undefined}
                    >
                        {day ? day : 'יום'}
                    </option>
                    )}
                </select>

                <select defaultValue={defaultMonth} onChange={({ currentTarget: { value } }) => { onPickOption(value, 'month') }}>
                    {MONTHS.map((month, idx) => <option
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
    type: string,
    title: string
    key: string,
    isRequire: boolean
}