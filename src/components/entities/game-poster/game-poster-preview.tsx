import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"

import { convertTimestampToDisplayText } from "../../../services/util/convert-timestamp-to-display-text"

import { gamePosterType } from "../../../types/game-poster"

import { DisplayBranchIconById } from "../../common/branch-icon/display-branch-icon-by-id"
import { GamePosterPreviewDropdown } from "./game-poster-preview-drop-down"


export const GamePosterPreview = ({ poster }: propsType) => {
    const { entityInfo: { time: { timestamp } } } = poster
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    const toggleIsDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen)


    return (
        <div className="entities-cmp--game-poster-preview__container">
            <div className="preview-title">
                <span className="branch-icon-container">
                    <DisplayBranchIconById id={poster.relatedInfo.branchId} className="branch-icon" />
                </span>
                <span className="title">{timestamp && convertTimestampToDisplayText(timestamp)}</span>
                <div className="options-drop-down-container" onClick={toggleIsDropdownOpen}>
                    <BsThreeDotsVertical />
                    {isDropdownOpen && <GamePosterPreviewDropdown />}
                </div>
            </div>

            <div className="image-container">
                <img
                    src={require(`../../../assets/images/entities/game-posters/${poster.imgPath}`)}
                    className="preview-image"
                    alt="כרזת משחק" />
            </div>

            <div className="game-link">
                עמוד המשחק
            </div>
        </div>
    )
}


type propsType = {
    poster: gamePosterType
}