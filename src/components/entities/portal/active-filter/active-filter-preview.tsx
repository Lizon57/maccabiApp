import { useNavigate } from "react-router-dom"

import { FiXCircle } from "react-icons/fi"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"


export const ActiveFilterPreview = ({ filter, setIsLoading }: Props) => {
    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()
    let text: string

    switch (filter.activeFilterChip.type) {
        case 'text':
            text = `${filter.activeFilterChip.text}: "${PARAMS.get(filter.param)}"`
            break

        case 'multi_select':
            const AMOUNT = PARAMS.get(filter.param)?.split(',').length
            if (!AMOUNT) {
                text = 'סנן פעיל'
                break
            }
            text = filter.activeFilterChip.text.replace('AMOUNT', '' + AMOUNT)
            break

        default:
            text = 'סנן פעיל'
    }


    const onRemoveFilter = () => {
        PARAMS.delete(filter.param)
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