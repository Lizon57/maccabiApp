import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { LIBRARY_DB } from "./library-db"

import { RiBookOpenFill } from "react-icons/ri"
import { FaUpload } from "react-icons/fa"
import { BiBrain } from "react-icons/bi"
import { BsPencil } from "react-icons/bs"


export const libraryEntity: Entity = {
    id: makeId(),

    name: 'library',

    dbInfo: {
        name: 'LibraryDB',
        fallbackDB: LIBRARY_DB
    },

    entityInfo: {
        name: {
            display: 'ספרייה',
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
                    type: 'page-title',
                    title: '"PAGE_NAME" מאת BY_WRITERS',
                    Icon: RiBookOpenFill
                },
                {
                    type: 'simple-info-list',

                    infos: [
                        {
                            type: 'boolean',
                            title: 'ספר אוטוביוגרפי',
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
                type: 'multi_number_filter',
                key: 'entityInfo.item.pageCount',
                param: 'fPageCount',
                title: 'מס\' עמודים',
                activeFilterChip: {
                    type: 'numbers_range',
                    text: 'בין MIN ל-MAX עמ\''
                },
                option: {
                    min: 150,
                    max: 370,
                }
            },
            {
                id: makeId(),
                type: 'multi_number_filter',
                key: 'entityInfo.item.publishYear',
                param: 'fPublishYear',
                title: 'שנת הוצאה',
                activeFilterChip: {
                    type: 'numbers_range',
                    text: 'יצא לאור בין MIN ל-MAX'
                },
                option: {
                    min: 1906,
                    max: new Date().getFullYear(),
                }
            },
            {
                id: makeId(),
                type: 'text_filter',
                key: 'entityInfo.item.writers',
                param: 'fWriters',
                title: 'כותבים',
                activeFilterChip: {
                    type: 'text_filter',
                    text: 'TERM בין הכותבים'
                },
            },
            {
                id: makeId(),
                type: 'text_filter',
                key: 'entityInfo.item.publishers',
                param: 'fPublishers',
                title: 'מוציאים לאור',
                activeFilterChip: {
                    type: 'text_filter',
                    text: 'TERM בין המוציאים לאור'
                },
            },
            {
                id: makeId(),
                type: 'checkbox_filter',
                key: 'entityInfo.item.isBiography',
                param: 'fBiography',
                title: 'ביוגרפיות',
                activeFilterChip: {
                    type: 'checkbox_filter',
                    text: 'CHOOSE_OPTION ביוגרפיות'
                },
            }
        ]
    },

    saveItemPage: {
        stages: [
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
                        }
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