export const ImagePreview = ({ miniImage }: Props) => {
    return (
        <div className="entity-details--image-gallery-cmp__preview-container">
            <img src={miniImage.imageUrl} alt={miniImage.name} />
            <div className="name" title={miniImage.name}>{miniImage.name}</div>
        </div>
    )
}


type Props = {
    miniImage: {
        id: string,
        name: string,
        imageUrl: string
    }
}