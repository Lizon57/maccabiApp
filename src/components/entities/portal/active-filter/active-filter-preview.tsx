import { useNavigate } from "react-router-dom"

import { FiXCircle } from "react-icons/fi"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"
import { getFormatedDate } from "../../../../services/util/get-formated-date"


export const ActiveFilterPreview = ({ filter, setIsLoading }: Props) => {
    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()
    let text: string

    switch (filter.activeFilterChip.type) {
        case 'text':
            text = `${filter.activeFilterChip.text}: "${PARAMS.get(filter.param)}"`
            break

        case 'multi_select':
            const amount = PARAMS.get(filter.param)?.split(',').length
            if (!amount) {
                text = 'סנן פעיל'
                break
            }
            text = filter.activeFilterChip.text.replace('AMOUNT', '' + amount)
            break

        case 'numbers_range':
            const numbers = PARAMS.get(filter.param)?.split('|') || []
            text = filter.activeFilterChip.text.replace('MIN', numbers[0])
            text = text.replace('MAX', numbers[1])
            break

        case 'text_filter':
            const term = PARAMS.get(filter.param)?.split(',').map(t => `"${t}"`)
            text = filter.activeFilterChip.text.replace('TERM', term + '')
            break

        case 'checkbox_filter':
            const isChosen = JSON.parse(PARAMS.get(filter.param) || '')
            text = filter.activeFilterChip.text.replace('CHOOSE_OPTION', isChosen ? 'רק' : 'ללא')
            break

        case 'date_filter':
            let date: string | string[] | (number | undefined)[] = PARAMS.get(filter.param) || ''
            date = date.split('-')
            date = date.map(part => (part === 'undefined' || !part) ? undefined : +part)
            text = filter.activeFilterChip.text
            text = text.replace('CHOOSE_OPTION', getFormatedDate({ day: date[0], month: date[1], year: date[2] }, false, false) + '')
            break

        default:
            text = 'סנן פעיל'
    }


    const onRemoveFilter = () => {
        PARAMS.delete(filter.param)

        if (filter.activeFilterChip.type === 'numbers_range'
            || filter.activeFilterChip.type === 'text_filter'
            || filter.activeFilterChip.type === 'date_filter') {
            PARAMS.delete(filter.param + 'Type')
        }

        NAVIGATE({ search: PARAMS.toString().replaceAll('%2C', ',') })
        window.scrollTo({ top: 0 })
        setIsLoading(true)
    }


    return (
        <div className="entities-portal--active-filter-preview__container" title={text}>
            <span className="icon-wrapper" title="בטל סנן" onClick={onRemoveFilter}><FiXCircle /></span>
            <span className="text">{text}</span>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}