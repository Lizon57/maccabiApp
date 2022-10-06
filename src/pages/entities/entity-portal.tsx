import { useEffect, useState } from "react"

import { EntityItem } from "../../types/entity-item"

import { entityService } from "../../services/entities/entity-service"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"

import { EntityList } from "../../components/entities/portal/entity-list/entity-list"
import { OptionsList } from "../../components/entities/portal/options-list/options-list"
import { useEntitySortHandler } from "../../hooks/entities/use-entity-sort-parser"


export const EntityPortal = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [items, setItems] = useState<EntityItem[]>([])

    const sortBy = useEntitySortHandler()


    useEffect(() => {
        if (!isLoading || !ENTITY) return

        const loadItems = async () => {
            if (!isLoading) return

            try {
                const { dbInfo: { name: dbName, fallbackDB } } = ENTITY
                const items = await entityService.queryEntityItems(dbName, sortBy, fallbackDB) as EntityItem[]
                setItems(items)
            } catch ({ message }) {
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItems()
    }, [isLoading, ENTITY, items, sortBy])


    if (isLoading || !ENTITY) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />

    const {
        entityInfo: {
            image: { icon: Icon },
            name: { listTitle }
        }
    } = ENTITY

    return (
        <section className="entities-pages--entity-list__container">
            <h2 className="title-and-options-container">
                <span className="title">
                    <span className="icon"><Icon /></span>
                    <span className="text">{listTitle}</span>
                </span>

                <span className="options">
                    <OptionsList setIsLoading={setIsLoading} sorts={ENTITY.listPageInfo.sorts} />
                </span>
            </h2>

            <EntityList entity={ENTITY} items={items} imagePath={ENTITY.entityInfo.image.imagePath} />
        </section>
    )
}