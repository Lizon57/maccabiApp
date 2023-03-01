import { makeId } from "../services/util/make-id"
import { convertCamelCaseToKebabCase } from "../services/util/convert-camel-case-to-kebab-case"

import { signatureEntity } from "../data/entities/signature/signature"
import { crowdOrganizationEntity } from "../data/entities/crowd-organization/crowd-organization"
import { libraryEntity } from "../data/entities/library/library"

import { AppRoute } from "../models/types/entities/app-route"
import { Entity } from "../models/interfaces/entities/entity"

import { EntityPortal } from "../pages/entities/entity-portal"
import { EntityDetails } from "../pages/entities/entity-details"
import { EntitySave } from "../pages/entities/entity-save"
import { EntityRemove } from "../pages/entities/entity-remove"


export const entityMap: { [key: string]: Entity } = {
    signature: signatureEntity,
    crowdOrganization: crowdOrganizationEntity,
    library: libraryEntity
}

export const createEntityRoutes = () => {
    const routes: AppRoute[] = []
    Object.keys(entityMap).reduce((acc, key) => {
        const kababCaseKey = convertCamelCaseToKebabCase(key)

        // Portal route
        routes.push({
            id: makeId(),
            path: kababCaseKey,
            element: () => EntityPortal(entityMap[key])
        })

        // Item details route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/:id`,
            element: () => EntityDetails(entityMap[key])
        })

        // Item edit route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/:id/save`,
            element: () => EntitySave(entityMap[key])
        })

        // Item create route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/save`,
            element: () => EntitySave(entityMap[key])
        })

        // Item remove route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/:id/remove`,
            element: () => EntityRemove(entityMap[key])
        })

        return acc
    }, [])

    return routes
}


