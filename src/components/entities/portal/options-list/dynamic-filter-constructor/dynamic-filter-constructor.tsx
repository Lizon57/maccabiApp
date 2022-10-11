import { BsFilter } from "react-icons/bs"

export const DynamicFilterConstructor = ({ toggleIsFilterSectionOpen }: Props) => {
    const onToggleFillter = () => {
        window.scrollTo({ top: 0 })
        toggleIsFilterSectionOpen()
    }


    return (
        <div className="filter" title="סנן פריטים" onClick={onToggleFillter}>
            <BsFilter />
        </div>
    )
}


type Props = {
    toggleIsFilterSectionOpen: () => void,
}