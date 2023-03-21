import { BsFilter } from "react-icons/bs"


export const FilterSectionToggler = ({ toggleIsFilterSectionOpen, isFilterSectionOpen }: Props) => {
    const onToggleFillter = () => {
        !isFilterSectionOpen && window.scrollTo({ top: 0, behavior: 'smooth' })
        toggleIsFilterSectionOpen()
    }

    return (
        <div className="entities-portal--dynamic-filter__icon-wrapper" title="סנן פריטים" onClick={onToggleFillter}>
            <BsFilter />
        </div>
    )
}


type Props = {
    isFilterSectionOpen: boolean
    toggleIsFilterSectionOpen: () => void
}