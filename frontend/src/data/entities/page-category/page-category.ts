import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../models/interfaces/entities/entity"

import { AiFillFlag } from "react-icons/ai"
import { MdOutlineArticle } from "react-icons/md"


export const pageCategory: Entity = {
    id: makeId(),

    name: 'page-category',

    entityInfo: {
        name: {
            display: 'קטגוריות',
            openGraph: 'קטגוריות נושאים באתר מכביפדיה',
            listTitle: 'קטגוריות'
        },
        description: {
            short: '',
            full: ''
        },
        image: {
            thumbnail: {
                path: '',
                title: ''
            },
            imagePath: '',
            icon: AiFillFlag
        }
    },

    detailsPageInfo: {
        type: 'page-category',

        structure: {
            head: [
                {
                    type: 'categories-entity-items',
                    title: 'דפים בקטגוריית "PAGE_NAME"',
                    Icon: MdOutlineArticle,
                    key: 'related.miniEntityItems'
                }
            ],

            additional: [
                {
                    type: 'category-list',
                    title: 'קטגוריות',
                    key: 'related.categories'
                },
                {
                    type: 'image-gallery',
                    title: 'תמונות בקטגוריית "PAGE_NAME"',
                    key: 'related.miniImages'
                }
            ]
        }
    },

    listPageInfo: {
        previewType: 'square',

        sorts: [
        ],

        filters: [
        ]
    },

    saveItemPage: {
        stages: [
        ]
    }
}