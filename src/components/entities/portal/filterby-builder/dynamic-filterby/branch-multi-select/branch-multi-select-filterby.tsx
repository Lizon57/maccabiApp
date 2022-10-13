import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"

import { BranchMultiSelectFilterbyList } from "./branch-multi-select-filterby-list"


export const BranchMultiSelectFilterby = ({ filter, setIsLoading }: Props) => {
    return (
        <div className="entities-portal--branch-multi-select-filterby__container">
            <span className="title">{filter.title}</span>
            <BranchMultiSelectFilterbyList filterParam={filter.param} setIsLoading={setIsLoading} />
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}