import { branchService } from "../../../../../services/app/branch-service"


export const RelatedProfileOptionPreview = ({ option }: Props) => {
    const branchNames = branchService.getByIds(option.branchIds).map(branch => branch.name.display)
    const formatter = new Intl.ListFormat('he', { style: 'long', type: 'conjunction' })
    const branchesNameList = formatter.format(branchNames)


    return (
        <div className="entity-add-cmp--related-profile-option-preview__container" title={option.name}>
            <span className="image">
                <img
                    src="https://www.maccabipedia.co.il/images/e/e9/Eran_Zahavi_Profile.png"
                    alt={`${option.name} - תמונת פרופיל`}
                />
            </span>

            <div className="name-and-branch">
                <span className="name">{option.name}</span>
                <span className="branch">{branchesNameList}</span>
            </div>
        </div>
    )
}


type Props = {
    option: {
        id: string,
        name: string,
        branchIds: string[]
    }
}
