let additionalStyle: style;

export const CircularProgressBar = ({ type }: Props) => {
    switch (type) {
        case 'success':
            additionalStyle = { stroke: 'green' }
            break

        case 'danger':
            additionalStyle = { stroke: 'red' }
            break
            
            case 'activity':
            additionalStyle = { stroke: '#195da6' }
            break

        default: break
    }

    return (
        <div className="common-cmp--circular-progress-bar">
            <svg>
                <circle cx="12" cy="12" r="10" style={additionalStyle ? additionalStyle : {}} />
            </svg>
        </div>
    )
}


type Props = {
    type: string
}


type style = {
    stroke: string
}