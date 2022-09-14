import { convertTimestampToDisplayText } from "../../../services/util/convert-timestamp-to-display-text"
import { gamePosterType } from "../../../types/game-poster"


export const GamePosterPreview = ({ poster }: propsType) => {
    const { entityInfo: { time: { timestamp } } } = poster

    return (
        <div className="entities-cmp-game-poster-preview__container">
            <div className="date">
                {timestamp && convertTimestampToDisplayText(timestamp)}
            </div>
            <div className="image-container">
                <img src={require(`../../../assets/images/entities/game-posters/${poster.imgPath}`)} alt="כרזת משחק" />
                <div className="game-link">עמוד המשחק</div>
            </div>
        </div>
    )
}


type propsType = {
    poster: gamePosterType
}