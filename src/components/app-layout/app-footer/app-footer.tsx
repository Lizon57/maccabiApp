import { useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { useStoreDispatch } from "../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../hooks/store/use-store-selector"
import { setAppFooterClientHeight } from "../../../store/slicer/app-layout-slicer"

import { useOnWindowResize } from "../../../hooks/use-on-window-resize"

import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"


const SOCIAL_NETWORKS = [
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


export const AppFooter = () => {
    const dispatch = useStoreDispatch()
    const { appFooterClientHeight } = useStoreSelector(state => state.appLayout)
    const elAppFooter = useRef<HTMLDivElement>(null)


    const handleAppFooterRefUpdate = useCallback(() => {
        const footerClientHeight = elAppFooter.current?.clientHeight || 0

        if (!elAppFooter.current || (footerClientHeight === appFooterClientHeight)) return
        dispatch(setAppFooterClientHeight(footerClientHeight))
    }, [dispatch, appFooterClientHeight])

    useEffect(() => {
        handleAppFooterRefUpdate()
    }, [elAppFooter, handleAppFooterRefUpdate])

    useOnWindowResize(handleAppFooterRefUpdate)


    return (
        <footer className="app-layout--app-footer" ref={elAppFooter}>
            <div className="content">
                <div className="internal-links-container">
                    <Link to="#" title="מי את מכביפדיה?">אודות</Link>
                    <Link to="#" title="הצטרפות לצוות? יש בידך פריט? עזרו לנו לגדול!">עזרו לנו</Link>
                    <Link to="#" title="מצאתי טעות באתר">דווח על טעות</Link>
                </div>

                <div className="social-networks-links-container">
                    <span className="title" title="עקבו אחרי מכביפדיה (גם) ברשתות החברתיות">עקבו אחרינו</span>

                    <span className="social-networks-icons-container">
                        {SOCIAL_NETWORKS.map(network => <a key={network.path} href={network.path} target="_blank" rel="noreferrer">
                            <network.icon title={`מכביפדיה ב${network.name}`} />
                        </a>)}
                    </span>
                </div>
            </div>
        </footer>
    )
}