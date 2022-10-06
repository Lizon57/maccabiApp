import { makeId } from "../../../services/util/make-id"
import { SignatureEntityItem } from "../../../types/signature-entity-item"


export const SIGNATURE_DB: SignatureEntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'מיקי ברקוביץ'
            },
            branchId: 'branchI00002',
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
            branchId: 'branchI00001',
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
            branchId: 'branchI00004',
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
            branchId: 'branchI00003',
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