import { useStoreSelector } from "../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../common/main-title/main-title"


export const ItemTitle = ({ cmp }: Props) => {
    const { item } = useStoreSelector(state => state.displayEntityModule)

    cmp.title = cmp.title.replace('RELATED_PROFILE_NAME', (item.relatedInfo?.miniProfile?.displayName || ''))

    return (
        <MainTitle text={cmp.title} isSticky={true} Icon={cmp.Icon} />
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}