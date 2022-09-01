import BEMHelper from "react-bem-helper"

import logo from "../../../assets/images/logo.png"
import { BranchChipList } from "./branch-chip/branch-chip-list"
import { CategoryLinkList } from "./category-link/category-link-list"
import { OptionBar } from "./option-bar/option-bar"


const BEM_HELPER = new BEMHelper('app-header')


export const AppHeader = () => {
    return (
        <div {...BEM_HELPER('container')}>
            <div {...BEM_HELPER('content')}>
                <BranchChipList />
                <OptionBar />
                <img src={logo} alt="עמוד ראשי" title="עמוד ראשי" {...BEM_HELPER('brand-logo')} />
                <CategoryLinkList relevant={[0, 3]} />
                <CategoryLinkList relevant={[3]} isLeftSided={true} />
            </div>
        </div>
    )
}