import { useCallback, useEffect, useRef } from "react"

import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useStoreDispatch } from "../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../hooks/store/use-store-selector"
import { useOnWindowResize } from "../../../hooks/use-on-window-resize"
import { setAppFooterClientHeight } from "../../../store/slicer/app-layout-slicer"


export const AppFooter = () => {
    const dispatch = useStoreDispatch()
    const { appFooterClientHeight } = useStoreSelector(state => state.appLayout)
    const EL_APP_FOOTER = useRef<HTMLDivElement>(null)

    const handleAppFooterRefUpdate = useCallback(() => {
        if (!EL_APP_FOOTER.current || (EL_APP_FOOTER.current.clientHeight === appFooterClientHeight)) return
        dispatch(setAppFooterClientHeight(EL_APP_FOOTER.current.clientHeight))
    }, [dispatch, appFooterClientHeight])

    useEffect(() => {
        handleAppFooterRefUpdate()
    }, [EL_APP_FOOTER, handleAppFooterRefUpdate])

    useOnWindowResize(() => handleAppFooterRefUpdate())


    return (
        <footer className="app-layout--app-footer" ref={EL_APP_FOOTER}>
            <div className="content">
                <div className="internal-links-container">
                    <Link to="/תרומה למכביפדיה">תרום למכביפדיה</Link>
                    <Link to="/מדריך העריכה">הפוך לעורך</Link>
                    <Link to="/אודות">מי אנחנו</Link>
                </div>

                <div className="social-networks-links-container">
                    <span className="title" title="עקבו אחרי מכביפדיה (גם) ברשתות החברתיות">עקבו אחרינו</span>

                    <span className="social-networks-icons-container">
                        {SOIAL_NETWORKS.map(network => <a key={network.path} href={network.path} target="_blank" rel="noreferrer">
                            <network.icon title={`מכביפדיה ב${network.name}`} />
                        </a>)}
                    </span>
                </div>
            </div>
        </footer>
    )
}


const SOIAL_NETWORKS = [
    {
        name: 'פייסבוק',
        icon: FaFacebookSquare,
        path: 'https://www.facebook.com/MaccabiPedia'
    },
    {
        name: 'טוויטר',
        icon: FaTwitterSquare,
        path: 'https://twitter.com/MaccabiPedia'
    },
    {
        name: 'אינסטגרם',
        icon: FaInstagramSquare,
        path: 'https://www.instagram.com/maccabipedia/'
    },
    {
        name: 'יוטיוב',
        icon: FaYoutubeSquare,
        path: 'https://www.youtube.com/channel/UCxnAYpW-2OJUXbrSil5EeQQ'
    },
]