import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../common/main-title/main-title"


export const ImageGallery = ({ cmp }: Props) => {
    return (
        <MainTitle text={cmp.title} Icon={cmp.Icon} />
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}