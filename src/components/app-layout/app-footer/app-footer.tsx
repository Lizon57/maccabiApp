import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"


export const AppFooter = ({ setFooterHeight }: propType) => {
    const footerRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const FOOTER_HEIGHT = footerRef?.current?.clientHeight
        setFooterHeight(FOOTER_HEIGHT)
    }, [setFooterHeight, footerRef])

    return (
        <footer className="app-layout--app-footer" ref={footerRef}>
            <div className="content">
                <div className="links-container">
                    <span>תרום למכביפדיה</span>
                    <span>מדריך האתר</span>
                    <span>הפוך לעורך</span>
                </div>

                <div className="social-netwroks-container">
                    <span className="title">עקבו אחרינו</span>

                    <span className="social-networks-icons">
                        {SOIAL_NETWORKS.map(network => <a key={network.path} href={network.path} target="_blank" rel="noreferrer">
                            <network.icon />
                        </a>)}
                    </span>
                </div>
            </div>
        </footer>
    )
}


const SOIAL_NETWORKS = [
    {
        icon: FaFacebookSquare,
        path: 'https://www.facebook.com/MaccabiPedia'
    },
    {
        icon: FaTwitterSquare,
        path: 'https://twitter.com/MaccabiPedia'
    },
    {
        icon: FaInstagramSquare,
        path: 'https://www.instagram.com/maccabipedia/'
    },
    {
        icon: FaYoutubeSquare,
        path: 'https://www.youtube.com/channel/UCxnAYpW-2OJUXbrSil5EeQQ'
    },
]


type propType = {
    setFooterHeight: Dispatch<SetStateAction<number>>
}