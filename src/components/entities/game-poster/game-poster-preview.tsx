import { gamePosterType } from "../../../types/game-poster"

export const GamePosterPreview = ({ poster }: propsType) => {
    return (
        <div className="entities-cmp-game-poster-preview__container">
            <img src={require(`../../../assets/images/entities/game-posters/${poster.imgPath}`)} alt="כרזת משחק" />
        </div>
    )
}


type propsType = {
    poster: gamePosterType
}