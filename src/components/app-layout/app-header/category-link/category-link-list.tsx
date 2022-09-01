import BEMHelper from "react-bem-helper"
import { CategoryLinkPreview } from "./category-link-preview"
import { categoryLinks } from "./data"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'category-link-list' })
const LEFT_SIDED_BEM_HELPER = { ...BEM_HELPER('container', 'left-sided') }


export const CategoryLinkList = ({ relevant, isLeftSided }: propsType) => {
    return (
        <ul  {...isLeftSided ? LEFT_SIDED_BEM_HELPER : { ...BEM_HELPER('container') }}>
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