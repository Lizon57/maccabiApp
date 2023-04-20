import { ObjectId } from "mongodb"
import { PageCategoryRelatedItem } from "./page-category-related-item"


export interface PageCategory {
    _id: ObjectId | string

    name: {
        display: string
    }

    related: {
        categories: PageCategoryRelatedItem[],
        entityItems: PageCategoryRelatedItem[],
        images: PageCategoryRelatedItem[]
    }
}