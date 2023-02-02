export const Loader = ({ text = 'טוען נתונים, אנא המתן...' }) => {
    return (
        <div className="common-cmp--loader">
            <div className="loader"></div>

            <div className="text">{text}</div>
        </div>
    )
}