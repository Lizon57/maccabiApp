import { BsFilter } from "react-icons/bs"

import { EntityFilterOption } from "../../../../types/entity-filter-option"
import { EntitySortOption } from "../../../../types/entity-sort-option"

import { SearchInput } from "../../../common/search-input/search-input"
import { SortDropdown } from "./sort-dropdown/sort-dropdown"


export const OptionsList = ({ sorts, searchValue, filters, setIsLoading, toggleIsFilterSectionOpen, searchCallback }: Props) => {
    const onToggleFillter = () => {
        window.scrollTo({ top: 0 })
        toggleIsFilterSectionOpen()
    }

    const shouldRenderPrimaryTextSearch = () => {
        return filters.find(filter => filter.type === 'primary_text')
    }


    return (
        <div className="entities-portal-cmp--list-options__container">
            {shouldRenderPrimaryTextSearch() &&
                <SearchInput
                    placeholder="חפש כותרת"
                    title="חפש לפי כותרת"
                    initialValue={searchValue}
                    searchCallback={searchCallback} />}

            <div className="filter" title="סנן פריטים" onClick={onToggleFillter}>
                <BsFilter />
            </div>

            <SortDropdown sorts={sorts} setIsLoading={setIsLoading} />
        </div>
    )
}


type Props = {
    sorts: EntitySortOption[],
    searchValue: string,
    filters: EntityFilterOption[],
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    toggleIsFilterSectionOpen: () => void,
    searchCallback: (value: React.SetStateAction<string>) => Promise<void>
}