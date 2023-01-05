import { IconType } from "react-icons"
import { BsEmojiFrown, BsEmojiSmile, BsImages } from "react-icons/bs"
import { FaHandPointLeft, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { BiCategory, BiSearch } from "react-icons/bi"
import { FiEdit2, FiXCircle } from "react-icons/fi"
import { AiFillEye, AiFillHeart, AiFillStar, AiOutlineCloudUpload, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai"



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
    },

    entityItemDefault: {
        imageGallery: BsImages,
        categoryList: BiCategory
    },

    entityItemPreview: {
        fillHeart: AiFillHeart,
        outlineHeart: AiOutlineHeart,
        view: AiFillEye,
        rate: AiFillStar,
        edit: FiEdit2,
        plus: AiOutlinePlus
    },

    entitySaveDefault: {
        imageUpload: AiOutlineCloudUpload
    }
}


type IconMap = {
    [key: string]: {
        [key: string]: IconType
    }
}