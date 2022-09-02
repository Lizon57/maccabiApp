export const MainTitle = ({ text = 'כותרת ראשית', isSticky = false }) => {
    return (
        <h2 className={'common-cmp--main-title' + (isSticky ? ' sticky' : '')}>{text}</h2>
    )
}