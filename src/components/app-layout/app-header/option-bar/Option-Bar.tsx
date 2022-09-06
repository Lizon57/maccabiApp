import { AppOptionBar } from "../../app-option-bar/app-option-bar"
import { Search } from "../search/search"



export const OptionBar = () => {
    return (
        <div className="app-header--option-bar__container">
            <AppOptionBar />
            <Search />
        </div>

    )
}