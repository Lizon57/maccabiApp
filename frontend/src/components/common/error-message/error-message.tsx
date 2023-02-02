import { RiEmotionSadFill } from "react-icons/ri"


export const ErrorMessage = ({ message = 'שגיאה בטעינת נתונים' }) => {
    return (
        <div className="common-cmp--error-message">
            <div className="error-emoji-container"><RiEmotionSadFill /></div>

            <div className="text">{message}</div>
        </div>
    )
}