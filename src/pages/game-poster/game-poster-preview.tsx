import { gamePosterType } from "../../types/game-poster"

export const GamePosterPreview = ({ poster }: propsType) => {
    return (
        <div>
            {poster.imgPath}
        </div>
    )
}


type propsType = {
    poster: gamePosterType
}