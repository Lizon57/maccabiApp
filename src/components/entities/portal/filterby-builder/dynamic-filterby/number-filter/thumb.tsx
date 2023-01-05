export const Thumb = ({ props }: Props) => {
    return (
        <div
            {...props}
            className="entities-portal--number-picker__thumb-container"
            style={{ ...props.style }}
        >
            <span className="indicator"></span>
        </div>
    )
}


type Props = {
    props: any
}