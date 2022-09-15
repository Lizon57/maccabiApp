import { BsThreeDotsVertical } from "react-icons/bs"

import { convertTimestampToDisplayText } from "../../../services/util/convert-timestamp-to-display-text"

import { gamePosterType } from "../../../types/game-poster"

import { DisplayBranchIconById } from "../../common/branch-icon/display-branch-icon-by-id"


export const GamePosterPreview = ({ poster }: propsType) => {
    const { entityInfo: { time: { timestamp } } } = poster

    return (
        <div className="entities-cmp-game-poster-preview__container">
            <div className="date">{timestamp && convertTimestampToDisplayText(timestamp)}</div>
            <div className="image-container">
                <img
                    src={require(`../../../assets/images/entities/game-posters/${poster.imgPath}`)}
                    className="preview-image"
                    alt="כרזת משחק" />

                <div className="branch-icon-container">
                    <DisplayBranchIconById id={poster.relatedInfo.branchId} />
                </div>

                <div className="options-drop-down-container">
                    <BsThreeDotsVertical />
                </div>
            </div>
        </div>
    )
}


type propsType = {
    poster: gamePosterType
}