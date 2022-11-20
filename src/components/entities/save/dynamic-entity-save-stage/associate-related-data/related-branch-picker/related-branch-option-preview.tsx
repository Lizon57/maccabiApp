export const RelatedBranchOptionPreview = ({ option }: Props) => {
    return (
        <div className="entity-save-cmp--related-branch-option-preview__container">
            <img src={require(`../../../../../../assets/images/branch-symbol/${option.img}`)} alt="" />
            <span className="branch-name">{option.name}</span>
        </div>
    )
}


type Props = {
    option: {
        name: string,
        img: string
    }
}
