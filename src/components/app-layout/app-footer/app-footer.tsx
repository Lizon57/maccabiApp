import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { Link } from "react-router-dom"


export const AppFooter = () => {
    return (
        <footer className="app-layout--app-footer">
            <div className="content">
                <div className="links-container">
                    <Link to="/תרומה למכביפדיה">תרום למכביפדיה</Link>
                    <Link to="/מדריך העריכה">הפוך לעורך</Link>
                    <Link to="/אודות">מי אנחנו</Link>
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