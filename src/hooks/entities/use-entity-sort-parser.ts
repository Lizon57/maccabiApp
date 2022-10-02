import { useLocation } from "react-router-dom"


export const useEntitySortHandler = () => {
    const queryString = require('query-string')
    const location = useLocation()
    const parsedQueryString = queryString.parse(location.search)

    return {
        sKey: parsedQueryString.sKey || 'name',
        sOrder: parsedQueryString.sOrder || 'asc'
    }
}