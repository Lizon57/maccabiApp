import { PAGE_CATEGORY_DB } from "../data/page-category-db"

import { PageCategory } from "../types/page-category"

import { asyncLocalStorageService } from "./async-local-storage-service"


const STORAGE_KEY = 'pageCategoryDB'
const FALLBACKDB = PAGE_CATEGORY_DB


const query = async () => {
    return await asyncLocalStorageService.query(STORAGE_KEY, FALLBACKDB) as PageCategory[]
}


const getById = async (id: string) => {
    try {
        const pageCategoryDB = await query() as PageCategory[]
        const category = pageCategoryDB.find(category => category.id === id)
        if (!category) throw new Error('לא נמצא פריט מבוקש')
        return category
    }
    catch (_err) {
        console.log(_err)
    }
}


export const pageCategoryService = {
    query,
    getById
}