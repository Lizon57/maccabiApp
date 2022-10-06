import { makeId } from "../../../services/util/make-id"
import { SignatureEntityItem } from "../../../types/signature-entity-item"


export const SIGNATURE_DB: SignatureEntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'מיקי ברקוביץ'
            },
            branchId: 'brandId00002',
        },

        entityInfo: {
            name: {
                display: 'מיקי ברקוביץ\''
            },
            view: 120
        },

        images: ['signature_1.png', 'signature_2.png', 'signature_3.png', 'signature_4.png']
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'אבי נמני'
            },
            branchId: 'brandId00001',
        },

        entityInfo: {
            name: {
                display: 'אבי נמני'
            },
            view: 20
        },

        images: ['signature_2.png', 'signature_3.png', 'signature_4.png', 'signature_5.png']
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'עומר דבדה'
            },
            branchId: 'brandId00004',
        },

        entityInfo: {
            name: {
                display: 'עומר דבדה'
            },
            view: 400
        },

        images: ['signature_1.png', 'signature_4.png']
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'אריאל כצנלסון'
            },
            branchId: 'brandId00003',
        },

        entityInfo: {
            name: {
                display: 'אריאל כצנלסון'
            },
            view: 40
        },

        images: ['signature_4.png']
    },
]