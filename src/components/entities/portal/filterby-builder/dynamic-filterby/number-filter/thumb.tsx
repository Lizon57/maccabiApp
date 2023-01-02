export const Thumb = ({ index, props, isDragged, values }: Props) => {
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
    index: number
    props: any
    isDragged: boolean
    values: number[]
}