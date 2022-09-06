import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { Link } from "react-router-dom"


export const AppFooter = () => {
    return (
        <footer className="app-layout--app-footer">
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