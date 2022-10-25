export const RelatedProfileOptionPreview = ({ option }: Props) => {
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
                <span className="branch">כדורגל, כדוריד</span>
            </div>
        </div>
    )
}


type Props = {
    option: {
        id: string,
        name: string
    }
}
