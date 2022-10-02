import { BiSearch } from "react-icons/bi"


export const SearchInput = ({ usageTitle }: propsType) => {
    return (
        <div className="common-cmp--search-input__container" title={usageTitle}>
            <input type="text" className="search-input" placeholder="חפש כותרת" />
            <BiSearch />
        </div>
    )
}



type propsType = {
    usageTitle: string
}