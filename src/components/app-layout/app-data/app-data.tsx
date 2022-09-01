import { BackToTop } from "./back-to-top/back-to-top"

export const AppData = ({ footerHeight }: propsType) => {
    return (
        <aside className="app-layout--app-data__aside-container">
            <BackToTop footerHeight={footerHeight} />
        </aside>
    )
}


type propsType = {
    footerHeight: number
}