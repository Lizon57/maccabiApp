import { AppRoute } from "../../models/types/entities/app-route"

import { userRoutes } from "../../routes/user-routes"
import { createEntityRoutes } from "../../routes/entity-routes"


export const ROUTES: AppRoute[] = [...createEntityRoutes(), ...userRoutes]
