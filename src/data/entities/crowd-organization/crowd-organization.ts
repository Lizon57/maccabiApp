import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { CROWD_ORGANIZATION_DB } from "./crowd-organization-db"

import { AiFillFlag } from "react-icons/ai"


export const crowdOrganizationEntity: Entity = {
    id: makeId(),

    name: 'crowd-organization',

    dbInfo: {
        name: 'CrowdOrganizationDB',
        fallbackDB: CROWD_ORGANIZATION_DB
    },

    entityInfo: {
        name: {
            display: 'ארגוני אוהדים',
            listTitle: 'ארגוני אוהדים'
        },
        description: {
            short: 'הארגונים שאחראיים על הצבע, השירים והקרנבל ביציע',
            full: 'איזה ארגון הכניס את "הקונטרה"? מתי התאגדו האוהדים לראשונה? כל הפרטים'
        },
        image: {
            thumbnail: {
                path: 'cnc-crowd-organization.png',
                title: 'ארגוני אוהדים'
            },
            imagePath: 'crowd-organization',
            icon: AiFillFlag
        }
    },

    detailsPageInfo: {
        type: 'article',
    },

    listPageInfo: {
        previewType: 'square',

        sorts: [
            { id: makeId(), title: 'כותרת (א-ת)', key: 'entityInfo.name.display', order: 'asc' },
            { id: makeId(), title: 'כותרת (ת-א)', key: 'entityInfo.name.display', order: 'desc' },
            { id: makeId(), title: 'צפיות (פחות-יותר)', key: 'itemInfo.view', order: 'asc' },
            { id: makeId(), title: 'צפיות (יותר-פחות)', key: 'itemInfo.view', order: 'desc' },
            { id: makeId(), title: 'דירוג (פחות-יותר)', key: 'itemInfo.rate.avg', order: 'asc' },
            { id: makeId(), title: 'דירוג (יותר-פחות)', key: 'itemInfo.rate.avg', order: 'desc' },
        ],

        filters: [
            {
                id: makeId(),
                type: 'primary_text',
                key: 'entityInfo.name.display',
                param: 'fDisplayName',
                title: 'חפש כותרת',
                activeFilterChip: {
                    type: 'text',
                    text: 'כותרת כוללת'
                }
            },
            {
                id: makeId(),
                type: 'branch_multi_select',
                key: 'relatedInfo.branchIds',
                param: 'fBranchIds',
                title: 'בחירת ענפים',
                activeFilterChip: {
                    type: 'multi_select',
                    text: 'בתוך AMOUNT ענפים'
                }
            },
        ]
    },

    saveItemPage: {
        stages: [
        ]
    }
}