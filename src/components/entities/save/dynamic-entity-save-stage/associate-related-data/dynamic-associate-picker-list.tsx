import { RelatedBranchPicker } from "./related-branch-picker/related-branch-picker"
import { RelatedProfilePicker } from "./related-profile-picker/related-profile-picker"

export const DynamicAssociatePickerList = ({ relateds }: Props) => {
    const getPickerCmp = (related: Related) => {
        const basicProps = { key: related.type, isRequire: related.isRequire }

        switch (related.type) {
            case 'profile':
                return <RelatedProfilePicker {...basicProps} />

            case 'branch':
                return <RelatedBranchPicker {...basicProps} />

            default: return null
        }
    }


    return (
        <div className="entity-save-cmp--associate-related-data__container">
            {relateds.map(getPickerCmp)}
        </div>
    )
}


type Related = {
    type: string
    isRequire: boolean
}


type Props = {
    relateds: Related[]
}