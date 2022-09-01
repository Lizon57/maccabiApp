import BEMHelper from "react-bem-helper"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'category-link-preview' })


export const CategoryLinkPreview = ({ child }: propsType) => {
    return (
        <li {...BEM_HELPER('container')}>
            {child.text}
            {child?.childrens?.length && <div {...BEM_HELPER('drop-down-container')}>
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