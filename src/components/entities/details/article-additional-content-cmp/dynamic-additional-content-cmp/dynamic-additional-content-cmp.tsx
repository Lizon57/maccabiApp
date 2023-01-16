import { ICON_TYPE_MAP } from "../../../../../constans/icon-type-map"

import { EntityDetailsStructureCmp } from "../../../../../models/combiners/entities/entity-details-structure-cmp"
import { CategoryList } from "./category-list/category-list"

import { ImageGalleryList } from "./image-gallery/image-gallery-list"


export const DynamicAdditionalContentCmp = ({ cmp }: Props) => {
    const iconMap = ICON_TYPE_MAP.entityItemDefault

    switch (cmp.type) {
        case 'image-gallery':
            cmp.Icon = iconMap.imageGallery
            return <ImageGalleryList cmp={cmp} />

        case 'category-list':
            cmp.Icon = iconMap.categoryList
            return <CategoryList cmp={cmp} />

        default:
            return null
    }
}


type Props = {
    cmp: EntityDetailsStructureCmp
}