import { FaSignature } from "react-icons/fa"

import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity"
import { SIGNATURE_DB } from "./signature-db"


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
                path: 'cnc-signature.png',
                title: 'אוסף החתימות'
            },
            imagePath: 'signatures',
            icon: FaSignature
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
        ]
    }
}