import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"


export const MultiSelectFilterby = ({ filter }: Props) => {
    return (
        <div className="entities-portal--multi-select-filterby__container">
            <span className="title">{filter.title}</span>
            <div>
                בדיקה
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption
}