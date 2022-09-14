import { RiEmotionSadFill } from "react-icons/ri"


export const ErrorMessage = ({ message }: propsType) => {
    return (
        <div className="common-cmp--error-message">
            <div className="error-emoji-container">
                <RiEmotionSadFill />
            </div>

            <div className="text">
                {message}
            </div>
        </div>
    )
}


type propsType = {
    message: string
}