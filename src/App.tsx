import { AppFooter } from "./components/app-layout/app-footer/app-footer"
import { AppHeader } from "./components/app-layout/app-header/app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"

export const App = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <PageRelatedData />
            <div className="app-content">
                תוכן העמוד
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <AppFooter />
        </div>
    )
}