import { OptionLink } from "./option-link/option-link"
import { Search } from "./search/search"



export const OptionBar = () => {
    return (
        <div className="app-header--option-bar__container">
            <OptionLink />
            <Search />
        </div>

    )
}