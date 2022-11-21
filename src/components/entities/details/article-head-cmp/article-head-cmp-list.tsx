import { makeId } from "../../../../services/util/make-id"

import { EntityDetailsStuctureCmp } from "../../../../types/entity/details/entity-details-structure-cmp"

import { DynamicHeadCmp } from "./dynamic-head-cmp/dynamic-head-cmp"


export const ArticleHeadCmpList = ({ cmps }: Props) => {
    return (
        <>
            {cmps.map(cmp => <DynamicHeadCmp key={makeId()} cmp={cmp} />)}
        </>
    )
}


type Props = {
    cmps: EntityDetailsStuctureCmp[]
}