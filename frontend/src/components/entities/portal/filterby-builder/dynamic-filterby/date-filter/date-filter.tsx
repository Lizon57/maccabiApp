import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import classNames from "classnames"
import { AiFillCaretDown } from "react-icons/ai"

import { EntityFilterOption } from "../../../../../../models/interfaces/entities/entity-filter-option"

import { eventBus } from "../../../../../../services/event-bus-service"

import { NON_ZERO_DAYS } from "../../../../../../constans/days"
import { NON_ZERO_MONTHS } from "../../../../../../constans/months"

import { Dropdown } from "../../../../../common/dropdown/dropdown"


const YEARS: (number | undefined)[] = [undefined]
for (let i = 1850; i <= new Date().getFullYear(); i++) {
    YEARS.push(i)
}
const TYPE_NAMES = ['אחרי', 'לפני', 'בדיוק ב']
const INITIAL_VALUE = { day: undefined, month: undefined, year: undefined }


export const DateFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const [type, setType] = useState(2)
    const [date, setDate] = useState<PossibleValue>(INITIAL_VALUE)

    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()

    const navigateNewPick = (activeDate: string) => {
        params.set(filter.param, activeDate)
        params.set(filter.param + 'Type', type + '')
        navigate({ search: params.toString() })
    }
    const debouncedNavigateToNewPick = useDebouncedCallback(navigateNewPick, 1000)


    const onSelectDate = (part: string, value: number | undefined) => {
        setDate(prevDate => ({ ...prevDate, [part]: value }))

        if (!date.year && !(part === 'year')) return
        let activeDate: string | (number | string | undefined)[] = [date.day, date.month, date.year]
        if (part === 'day') activeDate[0] = value
        else if (part === 'month') activeDate[1] = value
        else if (part === 'year') activeDate[2] = value

        activeDate = activeDate.map(part => {
            if (!part) return 'undefined'
            return part
        })
        activeDate = activeDate.join('-')

        debouncedNavigateToNewPick(activeDate)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        const unsubscribeClearFilter = eventBus.on('clear-filter', (param) => {
            if (param !== filter.param) return
            setDate(INITIAL_VALUE)
            setType(2)
        })


        if (!params.get(filter.param)) return

        let typeFromParam: string | number | null = params.get(filter.param + 'Type') || 2
        typeFromParam = +typeFromParam
        setType(typeFromParam)

        let newValue = params.get(filter.param)?.split('-').map(value => +value || undefined)
        if (!newValue || newValue.length !== 3) return
        const valueFromParam = {
            day: newValue[0],
            month: newValue[1],
            year: newValue[2],
        }
        setDate(valueFromParam)


        return () => unsubscribeClearFilter()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="entities-portal--date-filter__container">
            <span className="title">{filter.title}</span>
            <div className="content-container">
                <div className="date-picker">
                    <select
                        value={date.day ? date.day : undefined}
                        onChange={(ev) => onSelectDate('day', +ev.target.value || undefined)}
                    >
                        {NON_ZERO_DAYS.map(day => <option
                            key={day ? day : 'unknown'}
                            value={day ? day : undefined}
                        >
                            {day ? day : 'יום'}
                        </option>
                        )}
                    </select>

                    <select
                        className="month"
                        value={date.month ? date.month : undefined}
                        onChange={(ev) => onSelectDate('month', +ev.target.value || undefined)}
                    >
                        {NON_ZERO_MONTHS.map((month, idx) => <option
                            key={month ? month : 'unknown'}
                            value={idx ? idx : undefined}
                        >
                            {month ? month : 'חודש'}
                        </option>
                        )}
                    </select>

                    <select
                        className={classNames('year', { error: (!date.year && (date.day || date.month)) })}
                        value={date.year}
                        onChange={(ev) => onSelectDate('year', +ev.target.value || undefined)}
                    >
                        {YEARS.map(year => <option
                            key={year ? year : 'unknown'}
                            value={year ? year : undefined}
                        >
                            {year ? year : 'שנה'}
                        </option>
                        )}
                    </select>
                </div>

                <div className="additional-content-container">
                    <div className="indicator">אינדיקציה</div>
                    <div className="type-toggler">
                        <Dropdown controllerText={TYPE_NAMES[type]} controllerIcon={AiFillCaretDown} title="שיטת סינון">
                            <div className="options-container">
                                {TYPE_NAMES.map((typeName, idx) => <div
                                    key={typeName}
                                    className="type-option"
                                    onClick={() => setType(idx)}
                                >{typeName}</div>)}
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}


type PossibleValue = {
    day: number | undefined
    month: number | undefined
    year: number | undefined
}