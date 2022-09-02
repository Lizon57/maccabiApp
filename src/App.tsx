import { AppHeader } from "./components/app-layout/app-header/app-header"
import { PageRelatedData } from "./components/app-layout/page-data/page-related-data"
import { AppData } from "./components/app-layout/app-data/app-data"
import { AppFooter } from "./components/app-layout/app-footer/app-footer"
import { MainTitle } from "./components/common/main-title/main-title"


export const App = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <PageRelatedData />
            <div className="app-content">
                תוכן העמוד
                <MainTitle text="כותרת ראשית" isSticky={true} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <MainTitle text="כותרת שניה" isSticky={true} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <AppData />
            <AppFooter />
        </div>
    )
}