import classNames from "classnames"

import { CATEGORY_LINKS } from "../../../../../constans/app-category-links"

import { CategoryLinkPreview } from "./category-link-preview"


export const CategoryLinkList = ({ relevant, isLeftSided }: Props) => {
    return (
        <ul className={classNames('app-header--category-link__container', { 'left-sided': isLeftSided })}>
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