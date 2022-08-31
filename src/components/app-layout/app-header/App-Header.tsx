import BEMHelper from "react-bem-helper"

import logo from "../../../assets/images/logo.png"
import { BranchChipList } from "./branch-chip/branch-chip-list"
import { OptionBar } from "./option-bar/option-bar"


const BEM_HELPER = new BEMHelper('app-header')


export const AppHeader = () => {
    return (
        <div {...BEM_HELPER('container')}>
            <div {...BEM_HELPER('content')}>
                <BranchChipList />
                <OptionBar />
                <img src={logo} alt="עמוד ראשי" title="עמוד ראשי" {...BEM_HELPER('brand-logo')} />
            </div>
        </div>
    )
}