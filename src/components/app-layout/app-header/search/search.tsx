import { BiSearch } from "react-icons/bi"

export const Search = () => {
    return (
        <div className="app-header--option-bar__search-container" title="חפש במכביפדיה">
            <input type="text" placeholder="חפש במכביפדיה" />
            <BiSearch />
        </div>
    )
}