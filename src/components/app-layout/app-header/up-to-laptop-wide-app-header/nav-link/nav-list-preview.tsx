import { FiTriangle } from "react-icons/fi"
import { Link } from "react-router-dom"


export const NavListPreview = ({ category, currentCategoryOpen, setCurrentCategoryOpen }: Props) => {
    return (
        <li className="app-header--side-menu__drop-down">
            <div
                className={'title' + (currentCategoryOpen === category.id ? ' open' : '')}
                onClick={() => currentCategoryOpen === category.id
                    ? setCurrentCategoryOpen('')
                    : setCurrentCategoryOpen(category.id)}>
                <span>{category.text}</span>
                <span className="icon-container"><FiTriangle /></span>
            </div>

            <ul className={'drop-down-container' + (currentCategoryOpen === category.id ? ' open' : '')}>
                {category.childrens.map(link => <li key={link.id}>
                    <Link to={link.path}>{link.title}</Link>
                </li>)}
            </ul>
        </li>
    )
}


type Props = {
    category: {
        id: string,
        text: string,
        childrens: navLink[]
    },
    currentCategoryOpen: string,
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>
}

type navLink = {
    id: string,
    title: string,
    description: string,
    path: string,
    img: string
}