import { makeId } from "../../../../services/util/make-id"

import { EntityDetailsStuctureCmp } from "../../../../types/entity/details/entity-details-structure-cmp"

import { DynamicHeadCmp } from "./dynamic-head-cmp/dynamic-head-cmp"


export const ArticleHeadCmpList = ({ cmps, entityName }: Props) => {
    if (!cmps?.length) return null

    return (
        <>
            {cmps.map(cmp => <DynamicHeadCmp key={makeId()} cmp={cmp} entityName={entityName} />)}
        </>
    )
}


type Props = {
    cmps?: EntityDetailsStuctureCmp[]
    entityName: string
}