import { getTrackBackground } from "react-range"


export const Track = ({ props, children, values }: Props) => {
    return (
        <div
            className="entities-portal--multi-range-picker__track-container"
            style={{ ...props.style, }}
        >
            <div
                ref={props.ref}
                className="track"
                style={{
                    background: getTrackBackground({
                        values,
                        colors: ['#d4d4d4', '#195da6', '#d4d4d4'],
                        min: 0,
                        max: 100,
                        rtl: true
                    }),
                }}
            >{children}</div>
        </div>
    )
}


type Props = {
    props: any,
    values: number[],
    children: React.ReactNode
}