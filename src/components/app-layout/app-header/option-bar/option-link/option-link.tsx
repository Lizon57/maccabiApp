import { Link } from "react-router-dom"
import { GoGear } from "react-icons/go"
import { FiEdit2 } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"


export const OptionLink = () => {
    return (
        <div className="app-header--option-bar__option-link-container">
            <span className="icon-wrapper">
                <GoGear />
                <ul className="links-container">
                    <li><Link to="">שינויים אחרונים</Link></li>
                    <li><Link to="">העלאת קבצים</Link></li>
                    <li><Link to="">קישורי מפעיל</Link></li>
                </ul>
            </span>

            <span className="icon-wrapper">
                <FiEdit2 />
                <ul className="links-container">
                    <li>עריכת עמוד</li>
                    <li>שיחת עמוד</li>
                    <li>גרסאות קודמות</li>
                    <li>העברה</li>
                    <li>הגנה</li>
                    <li>מחיקה</li>
                </ul>
            </span>

            <span className="icon-wrapper">
                <AiOutlineUser />
                <ul className="links-container">
                    <li>פרופיל</li>
                    <li>הודעות אישיות</li>
                    <li>העדפות</li>
                    <li>העריכות שלי</li>
                    <li>מדריך האתר</li>
                    <li>התנתק</li>
                </ul>
            </span>
        </div>
    )
}