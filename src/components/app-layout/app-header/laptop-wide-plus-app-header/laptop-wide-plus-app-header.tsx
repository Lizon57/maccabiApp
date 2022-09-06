import { Link } from "react-router-dom"
import squareLogo from "../../../../assets/images/square-logo.png"
import { BranchChipList } from "../branch-chip/branch-chip-list"
import { CategoryLinkList } from "../category-link/category-link-list"
import { OptionBar } from "../option-bar/option-bar"


export const LaptopWidePlusAppHeader = () => {
    return (
        <header className="app-layout--app-header__laptop_wide_plus">
            <div className="content">
                <BranchChipList />
                <OptionBar />
                <div className="brand-logo-container">
                    <Link to="/"><img src={squareLogo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" /></Link>
                </div>
                <CategoryLinkList relevant={[0, 3]} />
                <CategoryLinkList relevant={[3]} isLeftSided={true} />
            </div>
        </header>
    )
}