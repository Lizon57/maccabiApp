import { useNavigate } from "react-router-dom"
import { useDebounce } from "../../../../hooks/use-debounce"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"
import { EntitySortOption } from "../../../../types/entity/sort/entity-sort-option"

import { SearchInput } from "../../../common/search-input/search-input"
import { FilterSectionToggler } from "./filter-section-toggler/filter-section-toggler"
import { SortDropdown } from "./sort-dropdown/sort-dropdown"


export const OptionsList = ({ sorts, filters, isFilterSectionOpen, setIsLoading, toggleIsFilterSectionOpen }: Props) => {
    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()

    const primaryTextSearch = filters.find(filter => filter.type === 'primary_text')
    const shouldRenderFiltersToggle = !!filters.filter(filter => filter.type !== 'primary_text').length


    const primarySearchCallback = (str: string) => {
        if (!primaryTextSearch) return

        if (!str) params.delete(primaryTextSearch?.param)
        else params.set(primaryTextSearch?.param, str)

        navigate({ search: params.toString().replaceAll('%2C', ',') })
        setIsLoading(true)
    }
    const debouncedPrimarySearchCallback = useDebounce(primarySearchCallback, 700)


    return (
        <div className="entities-portal-cmp--list-options__container">
            {primaryTextSearch &&
                <SearchInput
                    placeholder={primaryTextSearch?.title || 'חיפוש'}
                    title={primaryTextSearch?.title || 'חיפוש'}
                    initialValue={params.get(primaryTextSearch?.param) || ''}
                    searchCallback={debouncedPrimarySearchCallback} />}

            {shouldRenderFiltersToggle &&
                <div className={"filterby-icon" + (isFilterSectionOpen ? ' active' : '')}>
                    <FilterSectionToggler toggleIsFilterSectionOpen={toggleIsFilterSectionOpen} />
                </div>}

            <SortDropdown sorts={sorts} setIsLoading={setIsLoading} />
        </div>
    )
}


type Props = {
    sorts: EntitySortOption[]
    filters: EntityFilterOption[]
    isFilterSectionOpen: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    toggleIsFilterSectionOpen: () => void
}