export const MainTitle = ({ text, isSticky = false, additionalCmp }: propsType) => {
    return (
        <div className={'common-cmp--main-title' + (isSticky ? ' sticky' : '') + (additionalCmp ? '' : ' background-colorize')}>
            <h2>{text}</h2>

            {additionalCmp && <div className="additional-cmp-container">{additionalCmp}</div>}
        </div>
    )
}


type propsType = {
    text: string,
    isSticky?: boolean,
    additionalCmp?: JSX.Element
}