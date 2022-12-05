import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { LIBRARY_DB } from "./library-db"

import { RiBookOpenFill } from "react-icons/ri"


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
                path: 'cnc-book.png',
                title: 'ספרייה'
            },
            imagePath: 'library',
            icon: RiBookOpenFill
        }
    },

    detailsPageInfo: {
        type: 'article',
    },

    listPageInfo: {
        previewType: 'detailed-square',

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
                type: 'multi_number_picker',
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
                type: 'multi_number_picker',
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
            }
        ]
    },

    saveItemPage: {
        stages: [
        ]
    }
}