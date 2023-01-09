import { AppRoute } from "../../models/types/entities/app-route"

import { createEntityRoutes } from "../../routes/entity-routes"


export const ROUTES: AppRoute[] = [...createEntityRoutes()]
