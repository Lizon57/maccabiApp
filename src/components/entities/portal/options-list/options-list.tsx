import { BsFilter } from "react-icons/bs"

import { EntitySortOption } from "../../../../types/entity-sort-option"

import { SearchInput } from "../../../common/search-input/search-input"
import { SortDropdown } from "./sort-dropdown/sort-dropdown"


export const OptionsList = ({ setIsLoading, sorts }: Props) => {
    return (
        <div className="entities-portal-cmp--list-options__container">
            <SearchInput title="חפש לפי כותרת" placeholder="חפש כותרת" />

            <div className="filter" title="סנן פריטים">
                <BsFilter />
            </div>

            <SortDropdown sorts={sorts} setIsLoading={setIsLoading} />
        </div>
    )
}


type Props = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    sorts: EntitySortOption[]
}