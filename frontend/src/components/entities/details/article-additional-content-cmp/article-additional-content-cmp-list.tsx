import { makeId } from "../../../../services/util/make-id"

import { EntityDetailsStructureCmp } from "../../../../models/combiners/entities/entity-details-structure-cmp"

import { DynamicAdditionalContentCmp } from "./dynamic-additional-content-cmp/dynamic-additional-content-cmp"


export const ArticleAdditionalContentCmpList = ({ cmps }: Props) => {
    if (!cmps?.length) return null

    return (
        <>
            {cmps.map(cmp => <DynamicAdditionalContentCmp key={makeId()} cmp={cmp} />)}
        </>
    )
}


type Props = {
    cmps?: EntityDetailsStructureCmp[]
}