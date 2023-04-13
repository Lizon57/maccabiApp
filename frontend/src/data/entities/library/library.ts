import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../models/interfaces/entities/entity"

import { RiBookOpenFill } from "react-icons/ri"
import { FaUpload } from "react-icons/fa"
import { BiBrain } from "react-icons/bi"
import { BsPencil } from "react-icons/bs"


export const libraryEntity: Entity = {
    id: makeId(),

    name: 'library',

    entityInfo: {
        name: {
            display: 'ספרייה',
            openGraph: 'כל הספרים שנכתבו על מכבי תל אביב',
            listTitle: 'ספרייה'
        },
        description: {
            short: 'מסיפור ההקמה ועד הביוגרפיה של ערן זהבי, מכבי בדפוס',
            full: 'כל המדיה המודפסת שנכתבה על מכבי, החל בסיפור הקמת האגודה ועד לביוגרפיות האחרונות'
        },
        image: {
            thumbnail: {
                path: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672041586/entity-default/cnc-book_javm5g.png',
                title: 'ספרייה'
            },
            imagePath: 'library',
            icon: RiBookOpenFill
        }
    },

    detailsPageInfo: {
        type: 'article',

        structure: {
            head: [
                {
                    type: 'bread-crumbs'
                },
                {
                    type: 'simple-profile',
                    title: '"PAGE_NAME" מאת BY_WRITERS',
                    Icon: RiBookOpenFill,
                    infos: [
                        {
                            type: 'boolean-profile-related-combiner',
                            title: 'ספרו האוטוביוגרפי של PROFILE_NAME',
                            value: 'entityInfo.item.isBiography'
                        },
                        {
                            type: 'list',
                            title: 'כותבים',
                            value: 'entityInfo.item.writers'
                        },
                        {
                            type: 'number',
                            title: 'שנת הוצאה',
                            value: 'entityInfo.item.publishYear'
                        },
                        {
                            type: 'number',
                            title: 'מס\' עמודים',
                            value: 'entityInfo.item.pageCount'
                        },
                        {
                            type: 'list',
                            title: 'מוציאים לאור',
                            value: 'entityInfo.item.publishers'
                        },
                        {
                            type: 'boolean',
                            title: 'ספר מתורגם',
                            value: 'entityInfo.item.isTranslated'
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
                type: 'multi_number_filter',
                param: 'fPageCount',
                title: 'מס\' עמודים',
                activeFilterChipTexts: ['עם MIN_RANGE עמודים לפחות',
                    'עם עד MAX_RANGE עמודים',
                    'עם MIN_RANGE עד MAX_RANGE עמודים'],
                option: {
                    min: 150,
                    max: 370,
                }
            },
            {
                id: makeId(),
                type: 'multi_number_filter',
                param: 'fPublishYear',
                title: 'שנת הוצאה',
                activeFilterChipTexts: ['יצאו ב-MIN_RANGE והלאה',
                    'יצאו לפני MAX_RANGE',
                    'יצאו בין MIN_RANGE ל-MAX_RANGE'],
                option: {
                    min: 1906,
                    max: new Date().getFullYear(),
                }
            },
            {
                id: makeId(),
                type: 'text_filter',
                param: 'fWriters',
                title: 'כותבים',
                activeFilterChipTexts: ['שמות הכותבים מתחילים ב-"PLAIN_VALUE"',
                    'שמות הכותבים נגמרים ב-"PLAIN_VALUE"',
                    'שמות הכותבים מכילים את "PLAIN_VALUE"',
                ],
            },
            {
                id: makeId(),
                type: 'text_filter',
                param: 'fPublishers',
                title: 'מוציאים לאור',
                activeFilterChipTexts: ['שמות המוציאים לאור מתחילים ב-"PLAIN_VALUE"',
                    'שמות המוציאים לאור נגמרים ב-"PLAIN_VALUE"',
                    'שמות המוציאים לאור מכילים את "PLAIN_VALUE"',
                ],
            },
            {
                id: makeId(),
                type: 'checkbox_filter',
                param: 'fBiography',
                title: 'ביוגרפיות',
                activeFilterChipTexts: ['BOOLEAN_VALUE ביוגרפיות'],
            },
            {
                id: makeId(),
                type: 'checkbox_filter',
                param: 'fTranslated',
                title: 'מתורגמים',
                activeFilterChipTexts: ['BOOLEAN_VALUE מתורגמים'],
            }
        ]
    },

    saveItemPage: {
        stages: [
            {
                title: 'פרטי עמוד',
                icon: BsPencil,
                type: 'page-details',
                isRequire: true,
            },

            {
                title: 'פרטי הספר',
                icon: RiBookOpenFill,
                type: 'profile-filler',
                isRequire: false,

                option: {
                    infos: [
                        {
                            type: 'symobl-seperate-list',
                            key: 'entityInfo.item.writers',
                            title: 'כותבים',
                            isRequire: false,

                            option: {
                                delimiter: ','
                            }
                        },
                        {
                            type: 'symobl-seperate-list',
                            key: 'entityInfo.item.publishers',
                            title: 'מוציאים לאור',
                            isRequire: false,

                            option: {
                                delimiter: ','
                            }
                        },
                        {
                            type: 'number-picker',
                            key: 'entityInfo.item.pageCount',
                            title: 'מס\' עמודים',
                            isRequire: false,

                            option: {
                                min: 0,
                                max: 600
                            }
                        },
                        {
                            type: 'number-picker',
                            key: 'entityInfo.item.publishYear',
                            title: 'שנת הוצאה',
                            isRequire: false,

                            option: {
                                min: 1906,
                                max: new Date().getFullYear()
                            }
                        },
                        {
                            type: 'binary-picker',
                            key: 'entityInfo.item.isBiography',
                            title: 'ביוגרפיה',
                            isRequire: false
                        },
                        {
                            type: 'binary-picker',
                            key: 'entityInfo.item.isTranslated',
                            title: 'מתורגם',
                            isRequire: false
                        }
                    ]
                }
            },

            {
                title: 'העלאת תמונות',
                icon: FaUpload,
                type: 'image-upload',
                isRequire: false,
            },

            {
                title: 'שיוך הספר',
                icon: BiBrain,
                type: 'associate-related-data',
                isRequire: true,

                option: {
                    relateds: [
                        {
                            type: 'profile',
                            isRequire: false
                        },
                        {
                            type: 'branch',
                            isRequire: false
                        }
                    ]
                }
            },
        ]
    }
}