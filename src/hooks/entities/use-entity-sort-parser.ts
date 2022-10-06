import { useLocation } from "react-router-dom"
import { EntitySortParam } from "../../types/entity-sort-param"


export const useEntitySortHandler = () => {
    const queryString = require('query-string')
    const location = useLocation()
    const parsedQueryString = queryString.parse(location.search)

    return {
        sKey: parsedQueryString.sKey || 'name',
        sOrder: parsedQueryString.sOrder || 'asc'
    } as EntitySortParam
}