import classNames from "classnames"
import { Link } from "react-router-dom"

import { CategoryLink } from "../../../../../types/app/app-category-links"

import { FiTriangle } from "react-icons/fi"


export const NavLinkPreview = ({ category, currentCategoryOpen, onCloseMenu, setCurrentCategoryOpen }: Props) => {
    const { id, text, childrens } = category
    const isOpenCategory = (currentCategoryOpen === id)


    return (
        <li className="app-header--side-menu__drop-down" title={text}>
            <div
                className={classNames('title', { open: isOpenCategory })}
                onClick={() => isOpenCategory ? setCurrentCategoryOpen('') : setCurrentCategoryOpen(id)}>
                <span>{text}</span>
                <span className="icon-container"><FiTriangle /></span>
            </div>

            <ul className={classNames('drop-down-container', { open: isOpenCategory })}>
                {childrens.map(({ id, path, title }) => {
                    return (<li key={id} onClick={onCloseMenu}>
                        <Link to={path} title={title}>{title}</Link>
                    </li>)
                }
                )}
            </ul>
        </li>
    )
}


type Props = {
    category: CategoryLink
    currentCategoryOpen: string
    onCloseMenu: () => void
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>
}