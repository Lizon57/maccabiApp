import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { CROWD_ORGANIZATION_DB } from "./crowd-organization-db"

import { AiFillFlag } from "react-icons/ai"
import { BsImages, BsPencil } from "react-icons/bs"
import { FaUpload } from "react-icons/fa"
import { BiBrain } from "react-icons/bi"


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
                path: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672041586/entity-default/cnc-crowd-organization_rjfp5v.png',
                title: 'ארגוני אוהדים'
            },
            imagePath: 'crowd-organization',
            icon: AiFillFlag
        }
    },

    detailsPageInfo: {
        type: 'article',

        structure: {
            head: [
                {
                    type: 'page-title',
                    title: 'ארגון PAGE_NAME',
                    Icon: AiFillFlag
                },

                {
                    type: 'simple-info-list',

                    infos: [
                        {
                            type: 'boolean',
                            title: 'ארגון פעיל',
                            value: 'entityInfo.item.dateOfActivity.isActive'
                        },
                        {
                            type: 'date',
                            title: 'תחילת פעילות',
                            value: 'entityInfo.item.dateOfActivity.start'
                        },
                        {
                            type: 'date',
                            title: 'סיום פעילות',
                            value: 'entityInfo.item.dateOfActivity.end'
                        },
                    ]
                }
            ],

            additional: [
                {
                    type: 'image-gallery',
                    title: 'תמונות מתוך "PAGE_NAME"'
                },
                {
                    type: 'category-list',
                    title: 'קטגוריות'
                }
            ]
        }
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
            {
                id: makeId(),
                type: 'date_filter',
                key: 'entityInfo.item.dateOfActivity.start',
                param: 'fDateOfActivityStart',
                title: 'התחילו לפעול',
                activeFilterChip: {
                    type: 'date_filter',
                    text: 'פעילים החל מ-CHOOSE_OPTION'
                },
            },
            {
                id: makeId(),
                type: 'date_filter',
                key: 'entityInfo.item.dateOfActivity.end',
                param: 'fDateOfActivityEnd',
                title: 'הפסיקו לפעול',
                activeFilterChip: {
                    type: 'date_filter',
                    text: 'פעילים עד ל-CHOOSE_OPTION'
                },
            },
            {
                id: makeId(),
                type: 'checkbox_filter',
                key: 'entityInfo.item.dateOfActivity.isActive',
                param: 'fIsActive',
                title: 'ארגון פעיל',
                activeFilterChip: {
                    type: 'checkbox_filter',
                    text: 'CHOOSE_OPTION ארגונים פעילים'
                },
            }
        ]
    },

    saveItemPage: {
        stages: [
            {
                title: 'פרטי הארגון',
                icon: AiFillFlag,
                type: 'profile-filler',
                isRequire: false,

                option: {
                    infos: [
                        {
                            type: 'date-picker',
                            key: 'entityInfo.item.dateOfActivity.start',
                            title: 'תחילת פעילות',
                            isRequire: false
                        },
                        {
                            type: 'date-picker',
                            key: 'entityInfo.item.dateOfActivity.end',
                            title: 'סוף פעילות',
                            isRequire: false
                        },
                        {
                            type: 'binary-picker',
                            key: 'entityInfo.item.dateOfActivity.isActive',
                            title: 'ארגון פעיל',
                            isRequire: false
                        },
                    ]
                }
            },

            {
                title: 'פרטי עמוד',
                icon: BsPencil,
                type: 'page-details',
                isRequire: true,
            },

            {
                title: 'העלאת תמונות',
                icon: FaUpload,
                type: 'image-upload',
                isRequire: false,
            },

            {
                title: 'שיוך ארגון',
                icon: BiBrain,
                type: 'associate-related-data',
                isRequire: true,

                option: {
                    relateds: [
                        {
                            type: 'branch',
                            isRequire: true
                        }
                    ]
                }
            },
        ]
    }
}