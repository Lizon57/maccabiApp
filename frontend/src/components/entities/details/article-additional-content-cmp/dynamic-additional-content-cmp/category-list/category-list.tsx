import { Link } from "react-router-dom"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"

import { KeySpecifyBasicEntityDetailsStructureCmp } from "../../../../../../models/interfaces/entities/entity-details-structure-cmp/key-specify-basic-entity-details-structure-cmp"

import { MiniPageCategory } from "../../../../../../types/page-category"
import { MainTitle } from "../../../../../common/main-title/main-title"


export const CategoryList = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const miniCategories = getValueByDynamicKey(cmp.key || '', item) as MiniPageCategory[]


    if (!miniCategories?.length) return null

    return (
        <section className="entity-details--category-list-cmp__container">
            <MainTitle text={cmp.title || 'קטגוריות'} Icon={cmp.Icon} />

            <div className="list-container">
                {miniCategories.map(({ id, displayName }) => <Link
                    to={`/page-category/${id}`}
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
    cmp: KeySpecifyBasicEntityDetailsStructureCmp
}
