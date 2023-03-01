import { devConfig } from "./dev-config"
import { prodConfig } from "./prod-config"
import { MongoConfig } from "../../models/server/mongo-config"

export let config: MongoConfig

if (process.env.NODE_ENV === 'production') config = prodConfig
else config = devConfig
