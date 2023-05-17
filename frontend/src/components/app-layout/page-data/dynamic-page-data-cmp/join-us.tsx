import { GrAnnounce } from "react-icons/gr"
import { MainTitle } from "../../../common/main-title/main-title"

export const JoinUs = () => {
    return (
        <aside className="app-layout--join-us__container">
            <MainTitle text="עזרו לנו לגדול" Icon={GrAnnounce} />
            <p>
                מכביפדיה הולכת וגדלה בכל יום שעובר, אנו עושים לילות כימים על מנת להנגיש לכם את כל ההיסטוריה של המועדון הכי גדול, הכי יפה, הכי מצליח, ואנו מחפשים כל הזמן לגדול אפילו יותר.
            </p>
            <p>
                יש בידיכם חומרים שטרם מופיעים באתר? יש לכם זמן פנוי לעזור בהעלאת חומרים? רוצים להצטרף לשומרי האימפריה?
            </p>
            <p>
                צרו איתנו קשר!
            </p>
        </aside>
    )
}