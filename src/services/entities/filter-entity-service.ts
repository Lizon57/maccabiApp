import { EntityItem } from "../../types/entity-item"


const filterEntityByTitle = (items: EntityItem[], searchTitle: string) => {
    console.log(searchTitle)
    return items.filter(item => item.entityInfo.name.display.includes(searchTitle))
}


export const filterEntityService = {
    filterEntityByTitle
}