import { IconType } from "react-icons"


export const MainTitle = ({ text, isSticky = false, Icon, additionalCmp }: Props) => {
    return (
        <h2 className={'common-cmp--main-title' + (isSticky ? ' sticky' : '')} title={text}>
            <div className="title-container">
                {Icon && <span className="icon"><Icon size={18} /></span>}
                <span className="text">{text}</span>
            </div>

            {additionalCmp && <div className="additional-cmp-container">{additionalCmp}</div>}
        </h2>
    )
}


type Props = {
    text: string
    isSticky?: boolean
    Icon?: IconType
    additionalCmp?: JSX.Element
}