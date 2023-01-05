import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../../common/main-title/main-title"


export const CategoryList = ({ cmp }: Props) => {
    const { miniCategories } = useStoreSelector(state => state.displayEntityModule.item.entityInfo)

    if (!miniCategories?.length) return null

    return (
        <div>
            <MainTitle text={cmp.title || 'קטגוריות'} Icon={cmp.Icon} />

            <div className="entity-details--category-list-cmp__container">
                {miniCategories.map(({ id, name: { display: displayName } }) => <div
                    key={id}
                    className="category-preview"
                >
                    {displayName}
                </div>)}
            </div>
        </div>
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}