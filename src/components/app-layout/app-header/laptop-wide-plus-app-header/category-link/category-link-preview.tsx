import { Link } from "react-router-dom"

import { CategoryLink } from "../../../../../types/app/app-category-links"


export const CategoryLinkPreview = ({ child }: Props) => {
    const { text, childrens } = child

    return (
        <li className="app-header--category-link__preview-container" title={text}>
            {text}
            {childrens?.length && <div className="drop-down-container">
                {child.childrens.map(link =>
                    <Link
                        key={link.id}
                        to={link.path}
                        className={'link-container' + (link.isDisabled ? ' disabled' : '')}
                        title={'עמוד ' + link.title}
                    >
                        {link.img && <img src={require(`../../../../../assets/images/navbar/${link.img}`)} alt={link.title} />}
                        <span className="title">{link.title}</span>
                        <span className="description">{link.description}</span>
                    </Link>)}
            </div>}
        </li>
    )
}


type Props = {
    child: CategoryLink
}