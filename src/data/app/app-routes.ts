import { makeId } from "../../services/util/make-id"

import { EntityPortal } from "../../pages/entities/entity-portal"
import { EntityDetails } from "../../pages/entities/entity-details"
import { signatureEntity } from "../entities/signature/signature"


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
    }
]