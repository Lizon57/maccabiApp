import { FiXCircle } from "react-icons/fi"

export const ActiveFilterPreview = () => {
    return (
        <div className="entities-portal--active-filter-preview__container">
            <span className="icon-wrapper" title="בטל סנן"><FiXCircle /></span>
            <span className="text">מתוך 2 ענפים</span>
        </div>
    )
}