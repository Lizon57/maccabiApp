import { BsFilter } from "react-icons/bs"
import { SearchInput } from "../../../common/search-input/search-input"
import { SortDropDown } from "./sort-drop-down/sort-drop-down"


export const ListOptions = ({ setIsLoading }: Props) => {
    return (
        <div className="entities-common-cmp--list-options__container">
            <SearchInput title="חפש לפי כותרת" placeholder="חפש כותרת" />
            <div className="search" title="חפש לפי כותרת">

            </div>

            <div className="filter" title="סנן פריטים">
                <BsFilter />
            </div>

            <SortDropDown setIsLoading={setIsLoading} />
        </div>
    )
}


type Props = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}