import { Link } from "react-router-dom"

import squareLogo from "../../../../assets/images/square-logo.png"

import { AppOptionBar } from "../../app-option-bar/app-option-bar"
import { BranchChipList } from "../branch-chip/branch-chip-list"
import { CategoryLinkList } from "./category-link/category-link-list"
import { AppSearch } from "../app-search/app-search"


export const LaptopWidePlusAppHeader = () => {
    return (
        <header className="app-layout--app-header__laptop_wide_plus">
            <div className="content">
                <BranchChipList />

                <div className="option-bar-container">
                    <AppOptionBar />
                    <AppSearch />
                </div>

                <div className="brand-logo-container">
                    <Link to="/"><img src={squareLogo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" /></Link>
                </div>

                <CategoryLinkList relevant={[0, 3]} />

                <CategoryLinkList relevant={[3]} isLeftSided />
            </div>
        </header>
    )
}