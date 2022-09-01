import { categoryLinks } from "./data"
import { CategoryLinkPreview } from "./category-link-preview"




export const CategoryLinkList = ({ relevant, isLeftSided }: propsType) => {
    return (
        <ul className={'app-header--category-link__container' + (isLeftSided ? ' left-sided' : '')}>
            {categoryLinks.slice(...relevant).map(categoryLink => {
                return <CategoryLinkPreview child={categoryLink} key={categoryLink.id} />
            })}
        </ul >
    )
}


type propsType = {
    relevant: number[],
    isLeftSided?: boolean
}