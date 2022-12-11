export const SimpleInfoListPreview = ({ info }: Props) => {
    return (
        <div className="entity-details--simple-info-list-preview__container">
            <span className="title">{info.title}</span>
            <span className="value">{info.value}</span>
        </div>
    )
}


type Props = {
    info: {
        title: string,
        value: string
    }
}