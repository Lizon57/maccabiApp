import { IconType } from "react-icons"
import { BsEmojiFrown, BsEmojiSmile, BsFillTrash2Fill, BsImages } from "react-icons/bs"
import { FaHandPointLeft, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { BiCategory, BiSearch } from "react-icons/bi"
import { FiEdit2, FiXCircle } from "react-icons/fi"
import { AiFillEye, AiFillHeart, AiFillStar, AiOutlineCloudUpload, AiOutlineHeart, AiOutlinePlus, AiOutlineUser } from "react-icons/ai"
import { GoGear } from "react-icons/go"



export const ICON_TYPE_MAP: IconMap = {
    appHeaderOptionLink: {
        helpful: GoGear,
        action: FiEdit2,
        user: AiOutlineUser
    },

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
    },

    remove: {
        trash: BsFillTrash2Fill
    }
}


type IconMap = {
    [key: string]: {
        [key: string]: IconType
    }
}