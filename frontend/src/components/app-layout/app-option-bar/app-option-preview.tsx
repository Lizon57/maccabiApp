import { Link, useLocation } from "react-router-dom"


export const AppOptionPreview = ({ isRelative, path, text, action, onCloseOption }: Props) => {
    const location = useLocation()

    const onOptionClick = () => {
        action && action()
        onCloseOption()
    }

    return (
        <li className="link-container">
            <Link to={isRelative ? location.pathname + path : path} onClick={onOptionClick}>
                {text}
            </Link>
        </li>
    )
}


type Props = {
    isRelative: boolean
    path: string
    text: string
    action: (() => void) | undefined
    onCloseOption: () => void
}