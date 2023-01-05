export const Loader = ({ text = 'טוען נתונים, אנא המתן...' }) => {
    return (
        <div className="common-cmp--loader">
            <div className="loader-container">
                <svg><circle cx="25" cy="25" r="20" fill="none" strokeWidth="5px" /></svg>
            </div>

            <div className="text">{text}</div>
        </div>
    )
}