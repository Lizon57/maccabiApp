import { getRandomInt } from "../../../services/util/get-random-int"
import { makeId } from "../../../services/util/make-id"
import { ImageEntityItem } from "../../../types/entity/entities/image-entity-item"



export const IMAGE_DB: ImageEntityItem[] = [
    {
        id: makeId(),

        entityInfo: {
            name: {
                display: 'חתימה של מיקי ברקוביץ\''
            },
            ctgIds: ['categoryId0006', 'categoryId0007', 'categoryId0011']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    }
]