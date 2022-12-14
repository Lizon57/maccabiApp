import { Link } from "react-router-dom"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../../common/main-title/main-title"
import { MiniPageCategory } from "../../../../../../types/page-category"


export const CategoryList = ({ cmp }: Props) => {
    const miniCategories = useSelector((state: RootState) => state.displayEntityItemModule.item.entityInfo.miniCategories) as MiniPageCategory[]


    if (!miniCategories?.length) return null

    return (
        <section className="entity-details--category-list-cmp__container">
            <MainTitle text={cmp.title || 'קטגוריות'} Icon={cmp.Icon} />

            <div className="list-container">
                {miniCategories.map(({ id, name: { display: displayName } }) => <Link
                    to={`/category/${id}`}
                    key={id}
                    className="category-preview"
                >
                    {displayName}
                </Link>)}
            </div>
        </section>
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}