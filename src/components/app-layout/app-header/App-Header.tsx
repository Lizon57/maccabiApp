import logo from "../../../assets/images/logo.png"
import { BranchChipList } from "./branch-chip/branch-chip-list"
import { CategoryLinkList } from "./category-link/category-link-list"
import { OptionBar } from "./option-bar/option-bar"


export const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="content">
                <BranchChipList />
                <OptionBar />
                <img src={logo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" />
                <CategoryLinkList relevant={[0, 3]} />
                <CategoryLinkList relevant={[3]} isLeftSided={true} />
            </div>
        </div>
    )
}