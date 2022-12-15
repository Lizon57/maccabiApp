import { useStoreSelector } from "../../../../../hooks/store/use-store-selector"
import { getFormatedList } from "../../../../../services/util/get-formated-list"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../common/main-title/main-title"


export const ItemTitle = ({ cmp }: Props) => {
    const { item } = useStoreSelector(state => state.displayEntityModule)


    cmp.title = cmp.title?.replace('RELATED_PROFILE_NAME', (item.relatedInfo?.miniProfile?.displayName || ''))
    cmp.title = cmp.title?.replace('PAGE_NAME', (item.entityInfo.name.display || ''))
    cmp.title = cmp.title?.replace('BY_WRITERS', (getFormatedList(item.entityInfo.item?.writers|| [])))


    return (
        <MainTitle text={cmp.title || ''} isSticky={true} Icon={cmp.Icon} />
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}