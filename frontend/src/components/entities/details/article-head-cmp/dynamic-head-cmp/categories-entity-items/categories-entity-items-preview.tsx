import { Link } from "react-router-dom"
import { ENTITIES_LIST } from "../../../../../../constans/entities-list"

import { PageCategoryRelatedItem } from "../../../../../../models/types/entities/page-category-related-item"

import { convertCamelCaseToKebabCase } from "../../../../../../services/util/convert-camel-case-to-kebab-case"


export const CategoriesEntityItemsPreview = ({ name, items }: Props) => {
    const kebabCaseName = convertCamelCaseToKebabCase(name)
    const entityName = ENTITIES_LIST[kebabCaseName].entityInfo.name.display


    return (
        <>
            <h3>{entityName}</h3>
            <ul>
                {items.map(item => <li key={item.id}>
                    <Link to={`/${item.entityName}/${item.id}`}>{item.displayName}</Link>
                </li>
                )}
            </ul>
        </>
    )
}


type Props = {
    name: string
    items: PageCategoryRelatedItem[]
}