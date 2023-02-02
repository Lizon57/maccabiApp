import { getTrackBackground } from "react-range"


export const Track = ({ props, children, values, min, max, type }: Props) => {
    const getColors = () => {
        switch (type) {
            case 0:
                return ['#d4d4d4', '#195da6']

            case 1:
                return ['#195da6', '#d4d4d4']

            case 2:
                return ['#d4d4d4', '#195da6','#d4d4d4']

            default: return []
        }
    }


    return (
        <div
            className="entities-portal--number-picker__track-container"
            style={{ ...props.style }}
        >
            <div
                ref={props.ref}
                className="track"
                style={{
                    background: getTrackBackground({
                        values,
                        colors: getColors(),
                        min,
                        max,
                        rtl: true
                    }),
                }}
            >{children}</div>
        </div>
    )
}


type Props = {
    props: any
    values: number[]
    min: number
    max: number
    type: number
    children: React.ReactNode
}