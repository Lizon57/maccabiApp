import { BiSearch, BiSort } from "react-icons/bi"
import { BsFilter } from "react-icons/bs"

export const ListOptions = () => {
    return (
        <div className="entities-common-cmp--list-options__container">
            <div className="search" title="חפש לפי כותרת">
                <input type="text" className="search-input" placeholder="חפש כותרת" />
                <BiSearch />
            </div>

            <div className="filter" title="סנן פריטים">
                <BsFilter />
            </div>

            <div className="sort" title="מיין תצוגה">
                <BiSort />
            </div>
        </div>
    )
}