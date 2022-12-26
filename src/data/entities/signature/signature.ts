import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { SIGNATURE_DB } from "./signature-db"

import { BiBrain } from "react-icons/bi"
import { FaSignature, FaUpload } from "react-icons/fa"
import { BsPencil } from "react-icons/bs"


export const signatureEntity: Entity = {
    id: makeId(),

    name: 'signature',

    dbInfo: {
        name: 'SignatureDB',
        fallbackDB: SIGNATURE_DB
    },

    entityInfo: {
        name: {
            display: 'חתימות',
            listTitle: 'אוסף החתימות'
        },
        description: {
            short: 'אוסף החתימות של שחקנים ואנשי צוות',
            full: 'בלי להדחק בתור, ומבלי שבוזבזה טיפת דיו, החתימות של שחקנים ואנשי צוות מחכות לכם'
        },
        image: {
            thumbnail: {
                path: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672041587/entity-default/cnc-signature_w5br83.png',
                title: 'אוסף החתימות'
            },
            imagePath: 'signatures',
            icon: FaSignature
        }
    },

    detailsPageInfo: {
        type: 'article',

        structure: {
            head: [
                {
                    type: 'page-title',
                    title: 'חתימתו של RELATED_PROFILE_NAME',
                    Icon: FaSignature
                }
            ],
            additional: [
                {
                    type: 'image-gallery',
                    title: 'חתימות של RELATED_PROFILE_NAME'
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
                type: 'multi_number_picker',
                key: 'miniImages',
                param: 'fItemImages',
                title: 'מס\' חתימות',
                activeFilterChip: {
                    type: 'numbers_range',
                    text: 'בין MIN ל-MAX חתימות'
                },
                option: {
                    isLengthProp: true,
                    min: 0,
                    max: 10
                }
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
                title: 'העלאת תמונות',
                icon: FaUpload,
                type: 'image-upload',
                isRequire: true,

                option: {
                    minImageCount: 1,
                }
            },


            {
                title: 'שיוך החתימה',
                icon: BiBrain,
                type: 'associate-related-data',
                isRequire: true,

                option: {
                    relateds: [
                        {
                            type: 'profile',
                            isRequire: true
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