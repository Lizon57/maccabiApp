export const CategoryLinkPreview = ({ child }: propsType) => {
    return (
        <li className="app-header--category-link__preview-container">
            {child.text}
            {child?.childrens?.length && <div className="drop-down-container">
                {child.childrens.map(link =>
                    <div className="link-container">
                        <img src={link.img && require(`../../../../assets/images/navbar/${link.img}`)} alt={link.title} />
                        <span className="title">{link.title}</span>
                        <span className="description">{link.description}</span>
                    </div>)}
            </div>}
        </li>
    )
}


type propsType = {
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