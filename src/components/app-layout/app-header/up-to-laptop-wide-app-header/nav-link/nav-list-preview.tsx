import { Link } from "react-router-dom"

import { FiTriangle } from "react-icons/fi"


export const NavListPreview = ({ category, currentCategoryOpen, onCloseMenu, setCurrentCategoryOpen }: Props) => {
    const resetMenu = () =>{
        setCurrentCategoryOpen('')
        onCloseMenu()
    }


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
                {category.childrens.map(link => <li key={link.id} onClick={resetMenu}>
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
    onCloseMenu: () => void,
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>
}

type navLink = {
    id: string,
    title: string,
    description: string,
    path: string,
    img: string
}