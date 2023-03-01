import { Link } from "react-router-dom"

import { CategoryLink } from "../../../../../types/app/app-category-links2"


export const CategoryLinkPreview = ({ child }: Props) => {
    const { text, childrens } = child

    return (
        <li className="app-header--category-link__preview-container" title={text}>
            {text}
            {childrens?.length && <div className="drop-down-container">
                {child.childrens.map(({ id, path, isDisabled, title, img, description }) => {
                    return (<Link
                        key={id}
                        to={path}
                        className={'link-container' + (isDisabled ? ' disabled' : '')}
                        title={'עמוד ' + title}
                    >
                        {img && <img src={require(`../../../../../assets/images/navbar/${img}`)} alt={title} />}
                        <span className="title">{title}</span>
                        <span className="description">{description}</span>
                    </Link>)
                })}
            </div>}
        </li>
    )
}


type Props = {
    child: CategoryLink
}