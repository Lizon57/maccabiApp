import { IconType } from "react-icons"
import { AiOutlineUser } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"
import { GoGear } from "react-icons/go"

import { makeId } from "../../../services/util/make-id"


export const APP_OPTION_BAR_OPTIONS: option[] = [
    {
        id: makeId(),
        icon: GoGear,
        title: 'אפשרויות',
        childrens: [
            {
                id: makeId(),
                text: 'שינויים אחרונים',
                path: '/מעקב: שינויים אחרונים',
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
                path: 'עריכה',
            },
            {
                id: makeId(),
                text: 'שיחה',
                path: 'שיחה',
            },
            {
                id: makeId(),
                text: 'גרסאות קודמות',
                path: 'יומן גרסאות',
            },
            {
                id: makeId(),
                text: 'העברה',
                path: 'העברה',
            },
            {
                id: makeId(),
                text: 'הגנה',
                path: 'הגנה',
            },
            {
                id: makeId(),
                text: 'מחיקה',
                path: 'מחיקה',
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
            },
            {
                id: makeId(),
                text: 'הודעות פרטיות',
                path: '/משתמש/אורן המתעפץ/הודעות פרטיות',
            },
            {
                id: makeId(),
                text: 'הגדרות',
                path: '/משתמש/אורן המתעפץ/הגדרות',
            },
            {
                id: makeId(),
                text: 'התנתק',
                path: '/התנתקות',
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
    restrictions?: string[]
}