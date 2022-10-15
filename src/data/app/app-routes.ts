import { makeId } from "../../services/util/make-id"

import { EntityPortal } from "../../pages/entities/entity-portal"
import { EntityDetails } from "../../pages/entities/entity-details"
import { signatureEntity } from "../entities/signature/signature"
import { EntityAdd } from "../../pages/entities/entity-add"


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
        path: 'signature/add',
        element: () => EntityAdd('signature')
    }
]