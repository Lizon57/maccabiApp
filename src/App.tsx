import { AppHeader } from "./components/app-layout/app-header/app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"
import { AppData } from "./components/app-layout/app-data/app-data"
import { AppFooter } from "./components/app-layout/app-footer/app-footer"

export const App = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <PageRelatedData />
            <div className="app-content">
                תוכן העמוד
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