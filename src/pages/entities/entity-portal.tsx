import { useEffect, useState } from "react"

import { EntityItem } from "../../types/entity-item"

import { entityService } from "../../services/entities/entity-service"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"

import { EntityList } from "../../components/entities/portal/entity-list/entity-list"
import { OptionsList } from "../../components/entities/portal/options-list/options-list"
import { useEntitySortHandler } from "../../hooks/entities/use-entity-sort-parser"
import { useDebounce } from "../../hooks/use-debounce"


export const EntityPortal = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [items, setItems] = useState<EntityItem[]>([])
    const [searchTitle, setSearchTitle] = useState('')
    const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false)

    const debouncedSearchCallback = useDebounce(setSearchTitle, 700)
    const toggleIsFilterSectionOpen = () => setIsFilterSectionOpen(!isFilterSectionOpen)
    const sortBy = useEntitySortHandler()

    useEffect(() => {
        setIsLoading(true)
    }, [searchTitle])


    useEffect(() => {
        if (!isLoading || !ENTITY) return

        const loadItems = async () => {
            if (!isLoading) return

            try {
                const { dbInfo: { name: dbName, fallbackDB } } = ENTITY
                const items = await entityService.queryEntityItems(dbName, sortBy, searchTitle, fallbackDB) as EntityItem[]
                setItems(items)
            } catch ({ message }) {
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItems()
    }, [isLoading, ENTITY, items, sortBy, searchTitle])


    if (isLoading || !ENTITY) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />

    const {
        entityInfo: {
            image: { icon: Icon },
            name: { listTitle }
        }
    } = ENTITY

    return (
        <section className="entities-pages--entity-portal__container">
            <h2 className="title-and-options-container">
                <span className="title">
                    <span className="icon"><Icon /></span>
                    <span className="text">{listTitle}</span>
                </span>

                <span className="options">
                    <OptionsList
                        sorts={ENTITY.listPageInfo.sorts}
                        searchValue={searchTitle}
                        setIsLoading={setIsLoading}
                        searchCallback={debouncedSearchCallback}
                        toggleIsFilterSectionOpen={toggleIsFilterSectionOpen}
                    />
                </span>
            </h2>

            {isFilterSectionOpen && <div>סינונים</div>}

            {items.length
                ? <EntityList entity={ENTITY} items={items} imagePath={ENTITY.entityInfo.image.imagePath} />
                : <ErrorMessage message="לא נמצאו פריטים להצגה" />}
        </section>
    )
}