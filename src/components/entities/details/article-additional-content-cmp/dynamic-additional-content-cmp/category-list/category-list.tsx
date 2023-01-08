import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../../common/main-title/main-title"


export const CategoryList = ({ cmp }: Props) => {
    const { miniCategories } = useStoreSelector(state => state.displayEntityModule.item.entityInfo)

    if (!miniCategories?.length) return null

    return (
        <section className="entity-details--category-list-cmp__container">
            <MainTitle text={cmp.title || 'קטגוריות'} Icon={cmp.Icon} />

            <div className="list-container">
                {miniCategories.map(({ id, name: { display: displayName } }) => <div
                    key={id}
                    className="category-preview"
                >
                    {displayName}
                </div>)}
            </div>
        </section>
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}