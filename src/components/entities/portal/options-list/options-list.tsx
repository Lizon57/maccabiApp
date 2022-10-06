import { BsFilter } from "react-icons/bs"

import { EntitySortOption } from "../../../../types/entity-sort-option"

import { SearchInput } from "../../../common/search-input/search-input"
import { SortDropdown } from "./sort-dropdown/sort-dropdown"


export const OptionsList = ({ sorts, searchValue, setIsLoading, toggleIsFilterSectionOpen, searchCallback }: Props) => {
    return (
        <div className="entities-portal-cmp--list-options__container">
            <SearchInput
                placeholder="חפש כותרת"
                title="חפש לפי כותרת"
                initialValue={searchValue}
                searchCallback={searchCallback} />

            <div className="filter" title="סנן פריטים" onClick={() => toggleIsFilterSectionOpen()}>
                <BsFilter />
            </div>

            <SortDropdown sorts={sorts} setIsLoading={setIsLoading} />
        </div>
    )
}


type Props = {
    sorts: EntitySortOption[],
    searchValue: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    toggleIsFilterSectionOpen: () => void,
    searchCallback: (value: React.SetStateAction<string>) => Promise<void>
}