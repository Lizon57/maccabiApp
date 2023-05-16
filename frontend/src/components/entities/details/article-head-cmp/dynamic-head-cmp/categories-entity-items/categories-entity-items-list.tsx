import classNames from "classnames"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { KeySpecifyBasicEntityDetailsStructureCmp } from "../../../../../../models/interfaces/entities/entity-details-structure-cmp/key-specify-basic-entity-details-structure-cmp"
import { PageCategoryRelatedItem } from "../../../../../../models/types/entities/page-category-related-item"

import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"

import { MainTitle } from "../../../../../common/main-title/main-title"
import { CategoriesEntityItemsPreview } from "./categories-entity-items-preview"


export const CategoriesEntityItemsList = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const entityItems = getValueByDynamicKey(cmp.key, item) as PageCategoryRelatedItem[]

    let title = cmp.title || ''
    title = title.replace('PAGE_NAME', (item.name.display || ''))

    const entitiesMap = entityItems.reduce((acc: SimpleObj, value: PageCategoryRelatedItem) => {
        const currKey = value.entityName
        if (acc[currKey]) acc[currKey].push(value)
        if (!acc[currKey]) acc[currKey] = [value]
        return acc
    }, {})

    return (
        <div className="entity-details--categories-entity-list__container">
            {title && <MainTitle text={title} Icon={cmp.Icon} />}

            {Object.keys(entitiesMap) &&
                <div className={classNames('pages-list-container', { 'small-list': (entityItems.length < 9) })}>
                    {Object.keys(entitiesMap).map(catName => <CategoriesEntityItemsPreview
                        key={catName}
                        name={catName}
                        items={entitiesMap[catName]}
                    />
                    )}
                </div>
            }
        </div>
    )
}


type Props = {
    cmp: KeySpecifyBasicEntityDetailsStructureCmp
}

type SimpleObj = {
    [key: string]: PageCategoryRelatedItem[]
}