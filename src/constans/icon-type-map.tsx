import { IconType } from "react-icons"
import { BsEmojiFrown, BsEmojiSmile } from "react-icons/bs"
import { FaHandPointLeft, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import { FiXCircle } from "react-icons/fi"



export const ICON_TYPE_MAP: IconMap = {
    appMessage: {
        success: BsEmojiSmile,
        fail: BsEmojiFrown,
        message: FaHandPointLeft
    },
    socialNetwork: {
        facebook: FaFacebookSquare,
        twitter: FaTwitterSquare,
        instagram: FaInstagramSquare,
        youtube: FaYoutubeSquare,
    },
    search: {
        search: FiXCircle,
        clear: BiSearch,
    }
}


type IconMap = {
    [key: string]: {
        [key: string]: IconType
    }
}