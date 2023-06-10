import { httpService } from "../http-service"
import { localStorageService } from "../local-storage-service"

import { EntityItem } from "../../models/types/entities/item/entity-item"
import { EntityItemViewDetails } from "../../models/types/entities/entity-item-view-details"


const STORAGE_KEY = 'ViewedPages'


const query = async (dbName: string, params: URLSearchParams, archiveState?: string) => {
    if (archiveState) params.set('fArchived', archiveState + '')

    try {
        return await httpService.get(dbName, params) as EntityItem[]
    } catch (err) {
        throw err
    }
}

const getById = async (dbName: string, id: string, isPageAction = false) => {
    try {
        const res = await httpService.get(`${dbName}/${id}`) as EntityItem

        if (!isPageAction) _handleEntityItemView(dbName, id)
        return res
    }
    catch (err) {
        throw err
    }
}


const remove = async (dbName: string, id: string) => {
    try {
        await httpService.delete(`${dbName}/${id}`)
    }
    catch (err) {
        throw err
    }
}


const save = async (dbName: string, item: EntityItem) => {
    try {
        const savedItem = item._id ? await httpService.put(`${dbName}/${item._id}`, item) : await httpService.post(`${dbName}`, item)
        return savedItem
    }
    catch (err) {
        throw err
    }
}


const getMiniProfilesByPharse = async (pharse: string = '') => {
    try {
        return await httpService.get('profile/getMiniProfilesByPharse', { pharse })
    } catch (err) {
        return []
    }
}


const setEntityItemRate = async (entityName: string, id: string, rate: number) => {
    try {
        const ratePayload = { id, entityName, rate }
        return await httpService.put('entity-item-info-update/rate', { ratePayload })
    }
    catch (err) {
        throw err
    }
}

const setEntityItemLikeState = async (entityName: string, id: string, isLike: boolean) => {
    try {
        const likeStatePayload = { id, entityName, isLike }
        return await httpService.put('entity-item-info-update/like', { likeStatePayload })
    }
    catch (err) {
        throw err
    }
}


const _handleEntityItemView = async (entityName: string, id: string) => {
    let viewList = localStorageService.readFromStorage(STORAGE_KEY) as EntityItemViewDetails[]
    if (!Array.isArray(viewList)) {
        localStorageService.saveToStorage(STORAGE_KEY, [])
        viewList = []
    }

    viewList.push({ entityName, entityItemId: id })

    if (viewList.length >= 3) {
        try {
            await httpService.put('entity-item-info-update/view', viewList)
            localStorageService.saveToStorage(STORAGE_KEY, [])
        } catch {
            localStorageService.saveToStorage(STORAGE_KEY, viewList)
        }
    }
    else localStorageService.saveToStorage(STORAGE_KEY, viewList)
}


export const entityItemService = {
    query,
    getById,
    remove,
    save,
    getMiniProfilesByPharse,
    setEntityItemRate,
    setEntityItemLikeState
}