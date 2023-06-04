import { Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store/store"

import { ROUTES } from "./data/app/app-routes"

import { LaptopWidePlusAppHeader } from "./components/app-layout/app-header/laptop-wide-plus-app-header/laptop-wide-plus-app-header"
import { UpToLaptopWideAppHeader } from "./components/app-layout/app-header/up-to-laptop-wide-app-header/up-to-laptp-wide-app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"
import { AppData } from "./components/app-layout/app-data/app-data"
import { AppFooter } from "./components/app-layout/app-footer/app-footer"
import { AppOptionBar } from "./components/app-layout/app-option-bar/app-option-bar"
import { AppScreen } from "./components/app-layout/app-screen/app-screen"
import { RenderByDeviceWidth } from "./components/common/render-by/render-by-device-width"
import { SeoImplement } from "./components/common/seo-implement/seo-implement"
import { Loader } from "./components/common/loader/loader"
import { HomePage } from "./pages/homepage"


export const App = () => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
            <ReduxProvider store={store}>
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
                            <Suspense fallback={<Loader text="טוען עמוד, אנא המתן..." />}>
                                <Routes>
                                    {ROUTES.map(({ id, path, element: Element }) => <Route
                                        key={id}
                                        path={path}
                                        element={<Element />} />)}
                                    <Route path="/" element={<HomePage />} />
                                </Routes>
                            </Suspense>
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

                <SeoImplement openGraphTitle="מכביפדיה" />
            </ReduxProvider>
        </GoogleOAuthProvider>
    )
}