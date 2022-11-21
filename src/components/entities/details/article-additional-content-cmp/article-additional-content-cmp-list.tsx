import { makeId } from "../../../../services/util/make-id"

import { EntityDetailsStuctureCmp } from "../../../../types/entity/details/entity-details-structure-cmp"

import { DynamicAdditionalContentCmp } from "./dynamic-additional-content-cmp/dynamic-additional-content-cmp"


export const ArticleAdditionalContentCmpList = ({ cmps }: Props) => {
    return (
        <>
            {cmps.map(cmp => <DynamicAdditionalContentCmp key={makeId()} cmp={cmp} />)}
        </>
    )
}


type Props = {
    cmps: EntityDetailsStuctureCmp[]
}