import { BsFilter } from "react-icons/bs"


export const FilterSectionToggler = ({ toggleIsFilterSectionOpen }: Props) => {
    const onToggleFillter = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        toggleIsFilterSectionOpen()
    }

    return (
        <div className="entities-portal--dynamic-filter__icon-wrapper" title="סנן פריטים" onClick={onToggleFillter}>
            <BsFilter />
        </div>
    )
}


type Props = {
    toggleIsFilterSectionOpen: () => void
}