import { CATEGORY_LINKS } from "../../../../data/app/app-header-category-links"
import { CategoryLinkPreview } from "./category-link-preview"




export const CategoryLinkList = ({ relevant, isLeftSided }: Props) => {
    return (
        <ul className={'app-header--category-link__container' + (isLeftSided ? ' left-sided' : '')}>
            {CATEGORY_LINKS.slice(...relevant).map(categoryLink => {
                return <CategoryLinkPreview child={categoryLink} key={categoryLink.id} />
            })}
        </ul >
    )
}


type Props = {
    relevant: number[]
    isLeftSided?: boolean
}