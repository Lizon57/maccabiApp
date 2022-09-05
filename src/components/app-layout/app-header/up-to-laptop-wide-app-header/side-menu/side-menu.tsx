import { FiTriangle } from "react-icons/fi"


export const SideMenu = ({ isNavOpen }: typeProps) => {
    return (
        <div className={'app-header--side-nav-bar__container' + (isNavOpen ? ' open' : '')}>
            <ul className="category-links-container">
                <li className="category-container">
                    <div className="title">
                        <span>מכבי תל אביב</span>
                        <span className="icon-container"><FiTriangle /></span>
                    </div>
                </li>
                <li className="category-container">שחקנים וצוות</li>
                <li className="category-container">אוהדים ותרבות</li>
                <li className="category-container">משחקים</li>
                <li className="category-container">סטטיסטיות</li>
                <li className="category-container">מכבימדיה</li>
            </ul>

            <ul className="opts-link-container">
                <li className="category-container">אפשרויות</li>
                <li className="category-container">עריכה</li>
                <li className="category-container">משתמש</li>

            </ul>
        </div>

    )
}

type typeProps = {
    isNavOpen: boolean
}