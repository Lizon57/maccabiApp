import { BiSearch } from "react-icons/bi"

export const AppSearch = () => {
    return (
        <div className="app-header--app-search__container" title="חפש במכביפדיה">
            <input type="text" placeholder="חפש במכביפדיה" />
            <BiSearch />
        </div>
    )
}