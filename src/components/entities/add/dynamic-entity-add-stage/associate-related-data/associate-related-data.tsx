import { RelatedBranchPicker } from "./related-branch-picker"
import { RelatedProfilePicker } from "./related-profile-picker"


export const AssociateRelatedData = ({ relateds }: Props) => {
    const getRelatedDataPickerCmp = (related: string) => {
        switch (related) {
            case 'profile':
                return <RelatedProfilePicker key={related} />

            case 'branch':
                return <RelatedBranchPicker key={related} />

            default:
                return null
        }
    }


    return (
        <div className="entity-add-cmp--associate-related-data__container">
            {relateds.map(related => getRelatedDataPickerCmp(related))}
        </div>
    )
}


type Props = {
    relateds: string[]
}