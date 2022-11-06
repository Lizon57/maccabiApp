import { useState, useEffect } from "react"

import { RelatedBranchPicker } from "./related-branch-picker"
import { RelatedProfilePicker } from "./related-profile-picker"


export const AssociateRelatedData = ({ relateds, onCompleteStage }: Props) => {
    const [tempData, setTempData] = useState<TempData>({})
    const [profileRelatedBranchesIds, setProfileRelatedBranchesIds] = useState([])


    const onSetTempData = (type: string, payload: any) => {
        switch (type) {
            case 'profile':
                if (!payload.value || !payload.value.id || !payload.value.name || !payload.value.branchIds) return
                const { value: { id: profileId, name: displayName, branchIds } } = payload
                setTempData({
                    ...tempData,
                    relatedInfo: {
                        miniProfile: {
                            profileId,
                            displayName
                        },
                        branchIds
                    }
                })
                setProfileRelatedBranchesIds(branchIds)
                break

            case 'branch':
                if (!Array.isArray(payload)) return
                payload = payload.filter(branch => branch.value.id)
                payload = payload.map((branch: any) => branch.value.id)
                setTempData({
                    ...tempData,
                    relatedInfo: {
                        branchIds: payload
                    }
                })
                break

            default:
                return
        }
    }


    const getRelatedDataPickerCmp = (type: string) => {
        switch (type) {
            case 'profile':
                return <RelatedProfilePicker
                    key={type}
                    onSetTempData={onSetTempData}
                />

            case 'branch':
                return <RelatedBranchPicker
                    key={type}
                    profileRelatedBranchesIds={profileRelatedBranchesIds}
                    onSetTempData={onSetTempData}
                />

            default:
                return null
        }
    }


    useEffect(() => {
        if (!Object.keys(tempData).length) return

        let isStageFillValid = false
        relateds.forEach(related => {
            if (!related.isRequire) return

            switch (related.type) {
                case 'profile':
                    if (tempData.relatedInfo?.miniProfile?.profileId) isStageFillValid = true
                    break

                case 'branch':
                    if (tempData.relatedInfo?.branchIds?.length) isStageFillValid = true
                    break
            }
        })

        if (isStageFillValid) onCompleteStage()
    }, [tempData, relateds, onCompleteStage])


    return (
        <div className="entity-add-cmp--associate-related-data__container">
            {relateds.map(related => getRelatedDataPickerCmp(related.type))}
        </div>
    )
}


type Props = {
    relateds: { type: string, isRequire: boolean }[]
    onCompleteStage: () => void
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