import { PageCategoryRelatedItem } from "../../types/entities/page-category-related-item"


export interface PageCategory {
    id: string

    name: {
        display: string
    }

    related: {
        categories: PageCategoryRelatedItem[],
        entityItems: PageCategoryRelatedItem[],
        images: PageCategoryRelatedItem[]
    }
}