import { BsImages } from "react-icons/bs"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { ImageGallery } from "./ImageGallery"


export const DynamicAdditionalContentCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'image-gallery':
            cmp.Icon = BsImages
            return <ImageGallery cmp={cmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}