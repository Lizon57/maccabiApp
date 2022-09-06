import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { LaptopWidePlusAppHeader } from "./components/app-layout/app-header/laptop-wide-plus-app-header/laptop-wide-plus-app-header"
import { UpToLaptopWideAppHeader } from "./components/app-layout/app-header/up-to-laptop-wide-app-header/up-to-laptp-wide-app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"
import { AppData } from "./components/app-layout/app-data/app-data"
import { AppFooter } from "./components/app-layout/app-footer/app-footer"
import { RenderByDeviceWidth } from "./components/common/render-by/render-by-device-width"
import { UpToLaptopOptionBar } from "./components/app-layout/up-to-laptop-option-bar/up-to-laptop-option-bar"

import { APP_ROUTES } from "./data/app-routes"


export const App = () => {
    return (
        <Router>
            <div className="app-layout">
                <RenderByDeviceWidth minDeviceWide="tablet">
                    <LaptopWidePlusAppHeader />
                </RenderByDeviceWidth>
                <RenderByDeviceWidth maxDeviceWide="tablet" isInclusive={true}>
                    <UpToLaptopWideAppHeader />
                </RenderByDeviceWidth>
                <PageRelatedData />

                <div className="app-content">
                    <Routes>
                        {APP_ROUTES.map(route => <Route
                            key={route.id}
                            path={encodeURIComponent(route.path)}
                            element={<route.element />} />)}
                    </Routes>
                </div>
                <AppData />
                <AppFooter />
            </div>

            <UpToLaptopOptionBar />
        </Router>
    )
}