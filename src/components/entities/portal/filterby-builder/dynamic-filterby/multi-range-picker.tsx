import { useState } from "react"
import { Range, getTrackBackground } from "react-range"
import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"


export const MultiRangePicker = ({ filter, setIsLoading }: Props) => {
    const [values, setValues] = useState([20, 80])


    const onChangeValues = (values: number[]) => {
        console.log(values)
        setValues(values)
    }


    return (
        <div className="entities-portal--multi-range-picker__container">
            <span className="title">{filter.title}</span>
            <div className="range-container">
                <Range
                    values={values}
                    step={1}
                    min={0}
                    max={100}
                    rtl={true}
                    onChange={(values) => onChangeValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            style={{
                                ...props.style,
                                height: '2rem',
                                display: 'flex',
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '2px',
                                    width: '100%',
                                    background: getTrackBackground({
                                        values,
                                        colors: ['#d4d4d4', '#195da6', '#d4d4d4'],
                                        min: 0,
                                        max: 100,
                                        rtl: true
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ index, props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '10px',
                                width: '10px',
                                borderRadius: '50%',
                                backgroundColor: isDragged ? '#114174' : '#195da6',

                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-7px',
                                    color: '#fff',
                                    backgroundColor: '#195da6',
                                    padding: '5px',
                                    fontSize: '12px',
                                    borderRadius: '50vw',
                                }}
                            >
                                {values[index]}
                            </div>
                        </div>
                    )}
                />
            </div>
            <div style={{ width: '100%' }}>
                לפחות <span></span>
                ועד <span></span>
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}