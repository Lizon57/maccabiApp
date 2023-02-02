import { useNavigate } from "react-router-dom"

import { FiXCircle } from "react-icons/fi"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"
import { getFormatedDate } from "../../../../services/util/get-formated-date"


export const ActiveFilterPreview = ({ filter, setIsLoading }: Props) => {
    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()
    const activeFilterText = filter.activeFilterChip.text
    let text: string

    switch (filter.activeFilterChip.type) {
        case 'text':
            text = `${activeFilterText}: "${params.get(filter.param)}"`
            break

        case 'multi_select':
            const amount = params.get(filter.param)?.split(',').length
            if (!amount) {
                text = 'סנן פעיל'
                break
            }
            text = activeFilterText.replace('AMOUNT', '' + amount)
            break

        case 'numbers_range':
            const numbers = params.get(filter.param)?.split('|') || []
            text = activeFilterText.replace('MIN', numbers[0])
            text = text.replace('MAX', numbers[1])
            break

        case 'text_filter':
            const term = params.get(filter.param)?.split(',').map(t => `"${t}"`)
            text = activeFilterText.replace('TERM', term + '')
            break

        case 'checkbox_filter':
            const isChosen = JSON.parse(params.get(filter.param) || '')
            text = activeFilterText.replace('CHOOSE_OPTION', isChosen ? 'רק' : 'ללא')
            break

        case 'date_filter':
            let date: string | string[] | (number | undefined)[] = params.get(filter.param) || ''
            date = date.split('-').map(part => (part === 'undefined' || !part) ? undefined : +part)
            text = activeFilterText
            text = text.replace('CHOOSE_OPTION', getFormatedDate({ day: date[0], month: date[1], year: date[2] }, false, false) + '')
            break

        default:
            text = 'סנן פעיל'
    }


    const onRemoveFilter = () => {
        params.delete(filter.param)
        const type = filter.activeFilterChip.type

        if (type === 'numbers_range' || type === 'text_filter' || type === 'date_filter') params.delete(filter.param + 'Type')

        navigate({ search: params.toString().replaceAll('%2C', ',') })
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
    filter: EntityFilterOption
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}