import axios, { AxiosError } from 'axios'
import { sanitize } from 'dompurify'
import { STORAGE_KEY_LOGGEDIN_USER } from './user/user-service'


const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'


async function ajax(endpoint: string, method = 'GET', data: null | any = null) {
    endpoint = sanitize(endpoint)
    method = sanitize(method)
    
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            withCredentials: true,
            params: (method === 'GET') ? data : null,
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        console.dir(err)
        const error = err as AxiosError
        if (error.response && error.response.status === 401) {
            localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, '')
        }
        throw err
    }
}


export const httpService = {
    get(endpoint: string, data?: any) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint: string, data?: any) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint: string, data?: any) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint: string, data?: any) {
        return ajax(endpoint, 'DELETE', data)
    }
}