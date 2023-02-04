import { ObjectId } from "mongodb"


export type MiniPageCategory = {
    id: ObjectId

    name: {
        display: string
    }
}