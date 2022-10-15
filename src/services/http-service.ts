import Axios from 'axios'
import request from 'axios'



var axios = Axios.create({
    withCredentials: true
})


const ajax = async (endpoint: string, baseurl: string, method = 'GET', data: any) => {
    try {
        const res = await axios({
            url: `${baseurl}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null,
        })
        return res.data
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { response } = err
            console.log(response)
        }
    }
}

export const httpService = {
    get(endpoint: string, baseurl: string, data: any) {
        return ajax(endpoint, baseurl, 'GET', data)
    },
    post(endpoint: string, baseurl: string, data: any) {
        return ajax(endpoint, baseurl, 'POST', data)
    },
    put(endpoint: string, baseurl: string, data: any) {
        return ajax(endpoint, baseurl, 'PUT', data)
    },
    delete(endpoint: string, baseurl: string, data: any) {
        return ajax(endpoint, baseurl, 'DELETE', data)
    }
}