import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"
import { EntitySortOption } from "../../../../types/entity/sort/entity-sort-option"

import { SearchInput } from "../../../common/search-input/search-input"
import { DynamicFilterConstructor } from "./dynamic-filter-constructor/dynamic-filter-constructor"
import { SortDropdown } from "./sort-dropdown/sort-dropdown"


export const OptionsList = ({ sorts, searchValue, filters, setIsLoading, toggleIsFilterSectionOpen, searchCallback }: Props) => {
    const shouldRenderPrimaryTextSearch = () => {
        return filters.find(filter => filter.type === 'primary_text')
    }

    const shouldRenderFiltersToggle = () => {
        return !!filters.filter(filter => filter.type !== 'primary_text').length
    }


    return (
        <div className="entities-portal-cmp--list-options__container">
            {shouldRenderPrimaryTextSearch() &&
                <SearchInput
                    placeholder="חפש כותרת"
                    title="חפש לפי כותרת"
                    initialValue={searchValue}
                    searchCallback={searchCallback} />}

            {shouldRenderFiltersToggle() && <DynamicFilterConstructor toggleIsFilterSectionOpen={toggleIsFilterSectionOpen} />}

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