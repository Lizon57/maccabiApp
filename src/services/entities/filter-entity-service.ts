import { EntityItem } from "../../types/entity-item"


const filterEntityByTitle = (items: EntityItem[], searchTitle: string) => {
    return items.filter(item => item.entityInfo.name.display.includes(searchTitle))
}


export const filterEntityService = {
    filterEntityByTitle
}