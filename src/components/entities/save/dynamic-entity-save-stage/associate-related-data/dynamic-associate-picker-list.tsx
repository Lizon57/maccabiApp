import { RelatedBranchPicker } from "./related-branch-picker/related-branch-picker"
import { RelatedProfilePicker } from "./related-profile-picker/related-profile-picker"

export const DynamicAssociatePickerList = ({ relateds }: Props) => {
    const getPickerCmp = (related: Related) => {
        switch (related.type) {
            case 'profile':
                return <RelatedProfilePicker
                    key={related.type}
                    isRequire={related.isRequire}
                />

            case 'branch':
                return <RelatedBranchPicker
                    key={related.type}
                    isRequire={related.isRequire}
                />

            default: return null
        }
    }


    return (
        <div className="entity-save-cmp--associate-related-data__container">
            {relateds.map(related => getPickerCmp(related))}
        </div>
    )
}


type Related = {
    type: string,
    isRequire: boolean
}


type Props = {
    relateds: Related[],
}