import { useStoreSelector } from "../../../../../hooks/store/use-store-selector"
import { getFormatedList } from "../../../../../services/util/get-formated-list"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../common/main-title/main-title"


export const ItemTitle = ({ cmp }: Props) => {
    const { item } = useStoreSelector(state => state.displayEntityModule)

    let title = cmp.title

    title = title?.replace('RELATED_PROFILE_NAME', (item.relatedInfo?.miniProfile?.displayName || ''))
    title = title?.replace('PAGE_NAME', (item.entityInfo.name.display || ''))
    title = title?.replace('BY_WRITERS', (getFormatedList(item.entityInfo.item?.writers || [])))


    return (
        <MainTitle text={title || ''} isSticky={true} Icon={cmp.Icon} />
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}