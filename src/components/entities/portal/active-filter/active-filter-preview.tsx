import { useNavigate } from "react-router-dom"

import { FiXCircle } from "react-icons/fi"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"


export const ActiveFilterPreview = ({ filter, setIsLoading }: Props) => {
    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()


    const onRemoveFilter = () => {
        PARAMS.delete(filter.param)
        NAVIGATE({ search: PARAMS.toString() })
        window.scrollTo({ top: 0 })
        setIsLoading(true)
    }


    return (
        <div className="entities-portal--active-filter-preview__container" title="מציג ">
            <span className="icon-wrapper" title="בטל סנן" onClick={onRemoveFilter}><FiXCircle /></span>
            <span className="text">מתוך 2 ענפים</span>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}