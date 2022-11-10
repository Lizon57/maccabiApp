import { useState, useEffect } from "react"

import { RelatedBranchPicker } from "./related-branch-picker"
import { RelatedProfilePicker } from "./related-profile-picker"


export const AssociateRelatedData = ({ relateds, tempItem, onCompleteStage }: Props) => {
    const [stageData, setStageData] = useState<TempData>({})

    const onSetStageData = (data: Object) => {
        const newStageData = {
            ...stageData,
            ...data
        }
        setStageData(newStageData)
    }

    useEffect(() => {
        if (!Object.keys(stageData).length) return

        let isStageFillValid = false
        relateds.forEach(related => {
            if (!related.isRequire) return

            switch (related.type) {
                case 'profile':
                    if (stageData.relatedInfo?.miniProfile?.profileId) isStageFillValid = true
                    break

                case 'branch':
                    if (stageData.relatedInfo?.branchIds?.length) isStageFillValid = true
                    break
            }
        })

        if (isStageFillValid) onCompleteStage(stageData)
    }, [stageData, relateds, onCompleteStage])


    const getRelatedDataPickerCmp = (type: string) => {
        switch (type) {
            case 'profile':
                return <RelatedProfilePicker
                    key={type}
                    tempItem={tempItem}
                    onSetStageData={onSetStageData}
                />

            case 'branch':
                return <RelatedBranchPicker
                    key={type}
                    profileRelatedBranchesIds={stageData.relatedInfo?.branchIds || []}
                    tempItem={tempItem}
                    onSetStageData={onSetStageData}
                />

            default:
                return null
        }
    }


    return (
        <div className="entity-add-cmp--associate-related-data__container">
            {relateds.map(related => getRelatedDataPickerCmp(related.type))}
        </div>
    )
}


type Props = {
    relateds: { type: string, isRequire: boolean }[],
    tempItem: any,
    onCompleteStage: (data: Object) => void,
}


type TempData = {
    relatedInfo?: {
        miniProfile?: {
            displayName: string,
            profileId: string
        },
        branchIds?: string[]
    }
}