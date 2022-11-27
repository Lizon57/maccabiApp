import { makeId } from "../../services/util/make-id"

import { EntityPortal } from "../../pages/entities/entity-portal"
import { EntityDetails } from "../../pages/entities/entity-details"
import { signatureEntity } from "../entities/signature/signature"
import { EntitySave } from "../../pages/entities/entity-save"


export const ROUTES = [
    {
        id: makeId(),
        path: 'signature',
        element: () => EntityPortal('signature')
    },
    {
        id: makeId(),
        path: 'signature/:id',
        element: () => EntityDetails(signatureEntity)
    },
    {
        id: makeId(),
        path: 'signature/:id/save',
        element: () => EntitySave('signature')
    },
    {
        id: makeId(),
        path: 'signature/save',
        element: () => EntitySave('signature')
    },


    {
        id: makeId(),
        path: 'library',
        element: () => EntityPortal('library')
    },
    {
        id: makeId(),
        path: 'library/:id',
        element: () => EntityDetails(signatureEntity)
    },
    {
        id: makeId(),
        path: 'library/:id/save',
        element: () => EntitySave('library')
    },
    {
        id: makeId(),
        path: 'library/save',
        element: () => EntitySave('library')
    }
]