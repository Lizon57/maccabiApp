import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiXCircle } from "react-icons/fi"

import { EntityFilterOption } from "../../../../models/interfaces/entities/entity-filter-option"

import { getFormattedDate } from "../../../../services/util/get-formatted-date"
import { activeClearFilter } from "../../../../services/event-bus-service"


export const ActiveFilterPreview = ({ filter, searchParams, setIsLoading }: Props) => {
    const [text, setText] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        let filterType = searchParams.get(filter.param + 'Type') || 0
        let text = filter.activeFilterChipTexts[+filterType] || ''
        const plainValue = searchParams.get(filter.param)
        const valueLength = plainValue?.split(',').length + ''
        const range = plainValue?.split('|')
        const minRange = range?.[0] + ''
        const maxRange = range?.[1] + ''
        const booleanValue = (plainValue === 'true') ? 'רק' : 'ללא'

        let dateValue: string | string[] | (number | undefined)[] = plainValue || ''
        dateValue = dateValue.split('-').map(part => (part === 'undefined' || !part) ? undefined : +part)
        dateValue = getFormattedDate({ day: dateValue[0], month: dateValue[1], year: dateValue[2] }, false, false) + ''


        text = text.replace('PLAIN_VALUE', plainValue || '')
        text = text.replace('VALUE_LENGTH', valueLength || '')
        text = text.replace('MIN_RANGE', minRange || '')
        text = text.replace('MAX_RANGE', maxRange || '')
        text = text.replace('BOOLEAN_VALUE', booleanValue || '')
        text = text.replace('DATE_VALUE', dateValue || '')

        setText(text)
    }, [searchParams]) // eslint-disable-line react-hooks/exhaustive-deps


    const onRemoveFilter = () => {
        searchParams.delete(filter.param)
        searchParams.delete(filter.param + 'Type')

        navigate({ search: searchParams.toString().replaceAll('%2C', ',') })
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsLoading(true)
        activeClearFilter(filter.param)
    }


    return (
        <div className="entities-portal--active-filter-preview__container">
            <span className="icon-wrapper" title="בטל סנן" onClick={onRemoveFilter}><FiXCircle /></span>
            <span className="text">{text}</span>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption
    searchParams: URLSearchParams
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}