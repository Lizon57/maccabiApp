import logo from "../../../assets/images/logo.png"
import { BranchChipList } from "./branch-chip/branch-chip-list"
import { CategoryLinkList } from "./category-link/category-link-list"
import { OptionBar } from "./option-bar/option-bar"


export const LaptopWidePluusAppHeader = () => {
    return (
        <div className="app-layout--app-header">
            <div className="content">
                <BranchChipList />
                <OptionBar />
                <div className="brand-logo-container">
                    <img src={logo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" />
                </div>
                <CategoryLinkList relevant={[0, 3]} />
                <CategoryLinkList relevant={[3]} isLeftSided={true} />
            </div>
        </div>
    )
}