import { makeId } from "../../services/util/make-id"

import { EntityPortal } from "../../pages/entities/entity-portal"
import { EntityDetails } from "../../pages/entities/entity-details"
import { EntitySave } from "../../pages/entities/entity-save"

import { signatureEntity } from "../entities/signature/signature"
import { libraryEntity } from "../entities/library/library"
import { crowdOrganizationEntity } from "../entities/crowd-organization/crowd-organization"


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
        element: () => EntityDetails(libraryEntity)
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
    },

    {
        id: makeId(),
        path: 'crowd-organization',
        element: () => EntityPortal('crowd-organization')
    },
    {
        id: makeId(),
        path: 'crowd-organization/:id',
        element: () => EntityDetails(crowdOrganizationEntity)
    },
    {
        id: makeId(),
        path: 'crowd-organization/:id/save',
        element: () => EntitySave('crowd-organization')
    },
    {
        id: makeId(),
        path: 'crowd-organization/save',
        element: () => EntitySave('crowd-organization')
    }
]