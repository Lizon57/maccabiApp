import { LaptopWidePlusAppHeader } from "./components/app-layout/app-header/laptop-wide-plus-app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"
import { AppData } from "./components/app-layout/app-data/app-data"
import { AppFooter } from "./components/app-layout/app-footer/app-footer"
import { RenderByDeviceWidth } from "./components/common/render-by/render-by-device-width"


export const App = () => {
    return (
        <div className="app-layout">
            <RenderByDeviceWidth minDeviceWide="tablet">
                <LaptopWidePlusAppHeader />
            </RenderByDeviceWidth>
            <PageRelatedData />
            <div className="app-content">
                תוכן העמוד<br />
                {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
            </div>
            <AppData />
            <AppFooter />
        </div>
    )
}