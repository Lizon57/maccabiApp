import { makeId } from "../../services/util/make-id"

import { EntityPortal } from "../../pages/entities/entity-portal"


export const ROUTES = [
    {
        id: makeId(),
        path: 'signature',
        element: () => EntityPortal('signature')
    }
]