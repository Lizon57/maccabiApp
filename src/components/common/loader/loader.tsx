export const Loader = () => {
    return (
        <div className="common-cmp--loader">
            <div className="loader-container">
                <svg>
                    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5px" />
                </svg>
            </div>

            <div className="text">
                טוען נתונים, אנא המתן...
            </div>
        </div>
    )
}