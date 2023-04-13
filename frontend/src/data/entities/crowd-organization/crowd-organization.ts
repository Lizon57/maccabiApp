import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../models/interfaces/entities/entity"

import { AiFillFlag } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { FaUpload } from "react-icons/fa"
import { BiBrain } from "react-icons/bi"


export const crowdOrganizationEntity: Entity = {
    id: makeId(),

    name: 'crowd-organization',

    entityInfo: {
        name: {
            display: 'ארגוני אוהדים',
            openGraph: 'כל ארגוני האוהדים של מכבי תל אביב',
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
                    type: 'simple-profile',
                    title: 'ארגון PAGE_NAME',
                    Icon: AiFillFlag,
                    infos: [
                        {
                            type: 'boolean',
                            title: 'ארגון פעיל',
                            value: 'entityInfo.item.isActive'
                        },
                        {
                            type: 'dates-list',
                            title: 'פעילות',
                            value: 'entityInfo.item.activityDurations'
                        },
                    ]
                },
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
                param: 'fDisplayName',
                title: 'חפש כותרת',
                activeFilterChipTexts: ['כותרת כוללת "PLAIN_VALUE"']
            },
            {
                id: makeId(),
                type: 'branch_multi_select',
                param: 'fBranchIds',
                title: 'בחירת ענפים',
                activeFilterChipTexts: ['חפש בתוך VALUE_LENGTH ענפים']
            },
            {
                id: makeId(),
                type: 'date_filter',
                param: 'fDateOfActivityStart',
                title: 'התחילו לפעול',
                activeFilterChipTexts: ['התחילו לפעול ב-DATE_VALUE ואילך',
                    'התחילו לפעול לפני DATE_VALUE',
                    'התחילו לפעול בדיוק ב-DATE_VALUE'
                ]
            },
            {
                id: makeId(),
                type: 'date_filter',
                param: 'fDateOfActivityEnd',
                title: 'הפסיקו לפעול',
                activeFilterChipTexts: ['הפסיקו לפעול ב-DATE_VALUE ואילך',
                    'הפסיקו לפעול לפני DATE_VALUE',
                    'הפסיקו לפעול בדיוק ב-DATE_VALUE'
                ]
            },
            {
                id: makeId(),
                type: 'checkbox_filter',
                param: 'fIsActive',
                title: 'ארגונים פעילים',
                activeFilterChipTexts: ['BOOLEAN_VALUE ארגונים פעילים'],
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
                            type: 'durations-picker',
                            key: 'entityInfo.item.activityDurations',
                            title: 'פעילות',
                            isRequire: false
                        },
                        {
                            type: 'binary-picker',
                            key: 'entityInfo.item.isActive',
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