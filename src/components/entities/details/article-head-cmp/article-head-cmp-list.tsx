import { makeId } from "../../../../services/util/make-id"

import { EntityDetailsStructureCmp } from "../../../../models/combiners/entities/entity-details-structure-cmp"

import { DynamicHeadCmp } from "./dynamic-head-cmp/dynamic-head-cmp"


export const ArticleHeadCmpList = ({ cmps }: Props) => {
    if (!cmps?.length) return null

    return (
        <>
            {cmps.map(cmp => <DynamicHeadCmp key={makeId()} cmp={cmp} />)}
        </>
    )
}


type Props = {
    cmps?: EntityDetailsStructureCmp[]
}