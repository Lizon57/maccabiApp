export const MainTitle = ({ text, isSticky = false, additionalCmp }: Props) => {
    return (
        <div className={'common-cmp--main-title' + (isSticky ? ' sticky' : '') + (additionalCmp ? '' : ' background-colorize')}>
            <h2>{text}</h2>

            {additionalCmp && <div className="additional-cmp-container">{additionalCmp}</div>}
        </div>
    )
}


type Props = {
    text: string,
    isSticky?: boolean,
    additionalCmp?: JSX.Element
}