export const ImageGalleryPreview = ({ miniImage }: Props) => {
    const { name, imageUrl } = miniImage

    return (
        <div className="entity-details--image-gallery-cmp__preview-container" title={name}>
            <img src={imageUrl} alt={name} />
            <div className="name">{name}</div>
        </div>
    )
}


type Props = {
    miniImage: {
        name: string
        imageUrl: string
    }
}