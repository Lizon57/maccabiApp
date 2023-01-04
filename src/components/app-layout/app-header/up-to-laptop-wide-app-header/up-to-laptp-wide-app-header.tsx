import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useOnClickOutside } from "../../../../hooks/use-on-click-outside"
import { useStoreDispatch } from "../../../../hooks/store/use-store-dispatch"
import { setAppScreenZIndex } from "../../../../store/slicer/app-layout-slicer"

import { FaBars } from "react-icons/fa"

import wideLogo from "../../../../assets/images/wide-logo.png"
import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { AppOptionBar } from "../../app-option-bar/app-option-bar"
import { AppSearch } from "../app-search/app-search"
import { SideMenu } from "./side-menu/side-menu"


export const UpToLaptopWideAppHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [currentCategoryOpen, setCurrentCategoryOpen] = useState('')

    const elMenu = useRef<HTMLDivElement>(null)
    const dispatch = useStoreDispatch()


    const toggleMenu = (shouldOpen: boolean) => {
        setCurrentCategoryOpen('')
        setIsNavOpen(shouldOpen)
        shouldOpen ? dispatch(setAppScreenZIndex(499)) : dispatch(setAppScreenZIndex(0))
    }

    useOnClickOutside(elMenu, () => toggleMenu(false))


    return (
        <header className="app-layout--app-header__up-to-laptop-wide" ref={elMenu}>
            <div className="content">
                <div className="navigator-container">
                    <span className="icon-wrapper" onClick={() => toggleMenu(!isNavOpen)}><FaBars /></span>
                    <Link to="./">
                        <img src={wideLogo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" />
                    </Link>
                </div>
                <div className="options-container">
                    <RenderByDeviceWidth minDeviceWide="mobile" maxDeviceWide="tablet" isInclusive>
                        <AppOptionBar />
                    </RenderByDeviceWidth>
                    <AppSearch />
                </div>
            </div>

            <SideMenu
                isNavOpen={isNavOpen}
                currentCategoryOpen={currentCategoryOpen}
                setCurrentCategoryOpen={setCurrentCategoryOpen}
                onCloseMenu={() => toggleMenu(false)}
            />
        </header>
    )
}