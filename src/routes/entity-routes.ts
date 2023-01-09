import { makeId } from "../services/util/make-id"
import { convertCamelCaseToKebabCase } from "../services/util/convert-camel-case-to-kebab-case"

import { crowdOrganizationEntity } from "../data/entities/crowd-organization/crowd-organization"
import { libraryEntity } from "../data/entities/library/library"
import { signatureEntity } from "../data/entities/signature/signature"

import { AppRoute } from "../models/types/entities/app-route"
import { Entity } from "../types/entity/entity"

import { EntityPortal } from "../pages/entities/entity-portal"
import { EntityDetails } from "../pages/entities/entity-details"
import { EntitySave } from "../pages/entities/entity-save"
import { EntityRemove } from "../pages/entities/entity-remove"


export const entityMap: { [key: string]: Entity } = {
    signature: signatureEntity,
    library: libraryEntity,
    crowdOrganization: crowdOrganizationEntity,
}

export const createEntityRoutes = () => {
    const routes: AppRoute[] = []
    Object.keys(entityMap).reduce((acc, key) => {
        const kababCaseKey = convertCamelCaseToKebabCase(key)

        // Portal route
        routes.push({
            id: makeId(),
            path: kababCaseKey,
            element: () => EntityPortal(kababCaseKey)
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
            element: () => EntitySave(key)
        })

        // Item create route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/save`,
            element: () => EntitySave(key)
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


