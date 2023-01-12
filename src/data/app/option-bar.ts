import { ICON_TYPE_MAP } from "../../constans/icon-type-map"

import { AppOptionLinksListCategory } from "../../models/interfaces/app/app-option-links-list-category"

import { makeId } from "../../services/util/make-id"


export const OPTION_BAR: AppOptionLinksListCategory[] = [
    {
        id: makeId(),
        icon: ICON_TYPE_MAP.appHeaderOptionLink.helpful,
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
        icon: ICON_TYPE_MAP.appHeaderOptionLink.action,
        title: 'עריכה',
        childrens: [
            {
                id: makeId(),
                text: 'עריכה',
                path: '/save',
                isRelative: true,
                pageTypesRestriction: ['entity-item-details']
            },
            {
                id: makeId(),
                text: 'הוספה',
                path: '/save',
                isRelative: true,
                pageTypesRestriction: ['entity-item-portal']
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
                text: 'מחיקה',
                path: '/remove',
                isRelative: true,
                pageTypesRestriction: ['entity-item-details']
            },
        ]
    },
    {
        id: makeId(),
        icon: ICON_TYPE_MAP.appHeaderOptionLink.user,
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