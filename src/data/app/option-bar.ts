import { IconType } from "react-icons"
import { AiOutlineUser } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"
import { GoGear } from "react-icons/go"

import { makeId } from "../../services/util/make-id"


export const OPTION_BAR: option[] = [
    {
        id: makeId(),
        icon: GoGear,
        title: 'אפשרויות',
        childrens: [
            {
                id: makeId(),
                text: 'שינויים אחרונים',
                path: '/מעקב: שינויים אחרונים',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'העלאת תמונות',
                path: '/העלאת תמונות',
                isRelative: false
            }
        ]
    },
    {
        id: makeId(),
        icon: FiEdit2,
        title: 'עריכה',
        childrens: [
            {
                id: makeId(),
                text: 'עריכה',
                path: '/save',
                isRelative: true
            },
            {
                id: makeId(),
                text: 'שיחה',
                path: 'שיחה',
                isRelative: true
            },
            {
                id: makeId(),
                text: 'גרסאות קודמות',
                path: 'יומן גרסאות',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'הגנה',
                path: '/permissions',
                isRelative: true
            },
            {
                id: makeId(),
                text: 'מחיקה',
                path: '/remove',
                isRelative: true
            },
        ]
    },
    {
        id: makeId(),
        icon: AiOutlineUser,
        title: 'משתמש',
        childrens: [
            {
                id: makeId(),
                text: 'אורן המתעפץ',
                path: '/משתמש/אורן המתעפץ',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'הודעות פרטיות',
                path: '/משתמש/אורן המתעפץ/הודעות פרטיות',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'הגדרות',
                path: '/משתמש/אורן המתעפץ/הגדרות',
                isRelative: false
            },
            {
                id: makeId(),
                text: 'התנתק',
                path: '/התנתקות',
                isRelative: false
            },
        ]
    }
]


type option = {
    id: string,
    icon: IconType,
    title: string,
    childrens: link[]
}


type link = {
    id: string,
    text: string,
    path: string,
    isRelative: boolean
    restrictions?: string[]
}