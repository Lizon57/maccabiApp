import { FaBars } from "react-icons/fa"
import wideLogo from "../../../../assets/images/wide-logo.png"
import { Search } from "../option-bar/search/search"

export const UpToLaptopWideAppHeader = () => {
    return (
        <header className="app-layout--app-header__up-to-laptop-wide">
            <div className="content">
                <div className="options-container">
                    <div className="options-icon-wrapper">
                        <FaBars />
                    </div>
                    <img src={wideLogo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" />
                </div>
                <Search />
            </div>
        </header>
    )
}