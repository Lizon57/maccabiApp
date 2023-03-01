import { NON_ZERO_DAYS } from "../../../../../../../constans/days"
import { NON_ZERO_MONTHS } from "../../../../../../../constans/months"
import { YEARS } from "../../../../../../../constans/years"

import { UncompleteDate } from "../../../../../../../models/interfaces/common/uncomplete-date"


export const DatePicker = ({ idx, isDurationStartDate, date, onPickOption }: Props) => {
    return (
        <div className="entity-save-cmp--profile-filler-date-picker__container">
            <span className="picker">
                <select defaultValue={date?.day} onChange={({ currentTarget: { value } }) => { onPickOption(value, idx, isDurationStartDate, 'day') }}>
                    {NON_ZERO_DAYS.map(day => <option
                        key={day ? day : 'unknown'}
                        value={day ? day : undefined}
                    >
                        {day ? day : 'יום'}
                    </option>
                    )}
                </select>

                <select defaultValue={date?.month} onChange={({ currentTarget: { value } }) => { onPickOption(value, idx, isDurationStartDate, 'month') }}>
                    {NON_ZERO_MONTHS.map((month, idx) => <option
                        key={month ? month : 'unknown'}
                        value={idx ? idx : undefined}
                    >
                        {month ? month : 'חודש'}
                    </option>
                    )}
                </select>

                <select defaultValue={date?.year} onChange={({ currentTarget: { value } }) => { onPickOption(value, idx, isDurationStartDate, 'year') }}>
                    {YEARS.map(year => <option
                        key={year ? year : 'unknown'}
                        value={year ? year : undefined}
                    >
                        {year ? year : 'שנה'}
                    </option>
                    )}
                </select>
            </span>
        </div >
    )
}


type Props = {
    idx: number
    isDurationStartDate: boolean
    date: UncompleteDate | undefined
    onPickOption: (value: string, idx: number, isDurationStartDate: boolean, extendKey: string) => void
}