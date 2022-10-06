import { Link } from "react-router-dom"

export const CategoryLinkPreview = ({ child }: Props) => {
    return (
        <li className="app-header--category-link__preview-container">
            {child.text}
            {child?.childrens?.length && <div className="drop-down-container">
                {child.childrens.map(link =>
                    <Link key={link.id} to={link.path} className="link-container">
                        <img src={link.img && require(`../../../../assets/images/navbar/${link.img}`)} alt={link.title} />
                        <span className="title">{link.title}</span>
                        <span className="description">{link.description}</span>
                    </Link>)}
            </div>}
        </li>
    )
}


type Props = {
    child: {
        id: string,
        text: string,
        childrens: childrenType[]
    }
}

type childrenType = {
    id?: string,
    title: string,
    description: string,
    path: string,
    img: string
}