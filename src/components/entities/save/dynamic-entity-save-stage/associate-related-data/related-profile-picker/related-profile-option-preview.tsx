import { branchService } from "../../../../../../services/app/branch-service"


export const RelatedProfileOptionPreview = ({ option }: Props) => {
    if (!option) return null
    const { branchIds, name, profileImageUrl } = option

    const branchNames = branchService.getByIds(branchIds).map(branch => branch.name.display)
    const formatter = new Intl.ListFormat('he', { style: 'long', type: 'conjunction' })
    const branchesNameList = formatter.format(branchNames)


    return (
        <div className="entity-save-cmp--related-profile-option-preview__container" title={name}>
            <span className="image">
                <img src={profileImageUrl} alt={`${name} - תמונת פרופיל`} />
            </span>

            <div className="name-and-branch">
                <span className="name">{name}</span>
                <span className="branch">{branchesNameList}</span>
            </div>
        </div>
    )
}


type Props = {
    option: {
        id: string
        name: string
        branchIds: string[]
        profileImageUrl: string
    }
}
