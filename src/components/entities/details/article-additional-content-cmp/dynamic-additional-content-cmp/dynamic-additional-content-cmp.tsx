import { BiCategory } from "react-icons/bi"
import { BsImages } from "react-icons/bs"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"
import { CategoryListList } from "./category-list/category-list-list"

import { ImageGallery } from "./image-gallery/image-gallery"


export const DynamicAdditionalContentCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'image-gallery':
            cmp.Icon = BsImages
            return <ImageGallery cmp={cmp} />

        case 'category-list':
            cmp.Icon = BiCategory
            return <CategoryListList cmp={cmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}