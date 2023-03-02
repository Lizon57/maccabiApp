import { lazy } from "react"

import { makeId } from "../services/util/make-id"
import { convertCamelCaseToKebabCase } from "../services/util/convert-camel-case-to-kebab-case"

import { ENTITIES_LIST } from "../constans/entities-list"

import { AppRoute } from "../models/types/entities/app-route"

const EntityPortal = lazy(() => import('../pages/entities/entity-portal'))
const EntityDetails = lazy(() => import('../pages/entities/entity-details'))
const EntitySave = lazy(() => import('../pages/entities/entity-save'))
const EntityRemove = lazy(() => import('../pages/entities/entity-remove'))


export const createEntityRoutes = () => {
    const routes: AppRoute[] = []
    Object.keys(ENTITIES_LIST).forEach(key => {
        const kababCaseKey = convertCamelCaseToKebabCase(key)

        // Portal route
        routes.push({
            id: makeId(),
            path: kababCaseKey,
            element: EntityPortal
        })

        // Item details route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/:id`,
            element: EntityDetails
        })

        // Item edit route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/:id/save`,
            element: EntitySave
        })

        // Item create route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/save`,
            element: EntitySave
        })

        // Item remove route
        routes.push({
            id: makeId(),
            path: `${kababCaseKey}/:id/remove`,
            element: EntityRemove
        })
    })

    return routes
}


