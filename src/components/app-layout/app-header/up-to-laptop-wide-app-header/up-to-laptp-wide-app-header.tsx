import { useState } from "react"

import { FaBars } from "react-icons/fa"

import wideLogo from "../../../../assets/images/wide-logo.png"
import { Search } from "../search/search"
import { SideMenu } from "./side-menu/side-menu"


export const UpToLaptopWideAppHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className="app-layout--app-header__up-to-laptop-wide">
            <div className="content">
                <div className="navigator-container">
                    <span className="icon-wrapper" onClick={() => { setIsNavOpen(!isNavOpen) }}><FaBars /></span>
                    <img src={wideLogo}
                        alt="עמוד ראשי"
                        title="עמוד ראשי"
                        className="brand-logo"
                        onClick={() => { setIsNavOpen(false) }} />
                </div>
                <Search />
            </div>

            <SideMenu isNavOpen={isNavOpen} />
        </header>
    )
}