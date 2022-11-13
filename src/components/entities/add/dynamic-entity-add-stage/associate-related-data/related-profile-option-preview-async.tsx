import { useState, useEffect } from "react"

import { branchService } from "../../../../../services/app/branch-service"
import { entityItemService } from "../../../../../services/entities/entity-item-service"


export const RelatedProfileOptionPreviewAsync = ({ id }: Props) => {
    const [miniProfile, setMiniProfile] = useState<MiniProfile>()

    useEffect(() => {
        if (miniProfile?.id) return

        const loadProfile = async () => {
            try {
                const item = await entityItemService.getMiniProfileById(id)
                if (!item) return
                setMiniProfile(item)
            } catch (err) {
                console.log(err)
            }
        }
        loadProfile()
    }, [miniProfile, id])

    if (!miniProfile?.name) return null
    const branchNames = branchService.getByIds(miniProfile.branchIds).map(branch => branch.name.display)
    const formatter = new Intl.ListFormat('he', { style: 'long', type: 'conjunction' })
    const branchesNameList = formatter.format(branchNames)


    return (
        <div className="entity-add-cmp--related-profile-option-preview-async__container" title={miniProfile.name}>
            <span className="image">
                <img
                    src={miniProfile.profileImageUrl}
                    alt={`${miniProfile.name} - תמונת פרופיל`}
                />
            </span>

            <div className="name-and-branch">
                <span className="name">{miniProfile.name}</span>
                <span className="branch">{branchesNameList}</span>
            </div>
        </div>
    )
}


type Props = {
    id: string
}


type MiniProfile = {
    id: string,
    name: string,
    branchIds: string[],
    profileImageUrl: string | undefined
}