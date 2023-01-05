import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Provider } from "react-redux"
import { store } from "./store/store"

import { LaptopWidePlusAppHeader } from "./components/app-layout/app-header/laptop-wide-plus-app-header/laptop-wide-plus-app-header"
import { UpToLaptopWideAppHeader } from "./components/app-layout/app-header/up-to-laptop-wide-app-header/up-to-laptp-wide-app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"
import { AppData } from "./components/app-layout/app-data/app-data"
import { AppFooter } from "./components/app-layout/app-footer/app-footer"
import { AppOptionBar } from "./components/app-layout/app-option-bar/app-option-bar"
import { AppScreen } from "./components/app-layout/app-screen/app-screen"
import { RenderByDeviceWidth } from "./components/common/render-by/render-by-device-width"

import { ROUTES } from "./data/app/app-routes"
import { entityService } from "./services/entities/entity-service"
import { IMAGE_DB } from "./data/entities/image/image-db"
import { SeoImplement } from "./components/common/seo-implement"


export const App = () => {
    entityService.queryEntityItems('ImageDB', {}, {}, IMAGE_DB)

    return (
        <Provider store={store}>
            <Router>
                <div className="app-layout">
                    <RenderByDeviceWidth maxDeviceWide="tablet" isInclusive={true}>
                        <UpToLaptopWideAppHeader />
                    </RenderByDeviceWidth>
                    <RenderByDeviceWidth minDeviceWide="tablet">
                        <LaptopWidePlusAppHeader />
                    </RenderByDeviceWidth>

                    <PageRelatedData />

                    <div className="app-content">
                        <Routes>
                            {ROUTES.map(route => <Route
                                key={route.id}
                                path={route.path}
                                element={<route.element />} />)}
                        </Routes>
                        {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
                    </div>


                    <AppData />
                    <AppFooter />
                </div>

                <RenderByDeviceWidth maxDeviceWide="mobile" isInclusive={true}>
                    <AppOptionBar />
                </RenderByDeviceWidth>

                <AppScreen />
            </Router>

            <SeoImplement />
        </Provider>
    )
}