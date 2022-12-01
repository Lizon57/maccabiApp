import { useEffect, useState } from "react"

import { EntityItem } from "../../types/entity/entities/entity-item"

import { entityService } from "../../services/entities/entity-service"

import { useEntitySortHandler } from "../../hooks/entities/use-entity-sort-parser"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"

import { EntityList } from "../../components/entities/portal/entity-list/entity-list"
import { OptionsList } from "../../components/entities/portal/options-list/options-list"
import { ActiveFilterList } from "../../components/entities/portal/active-filter/active-filter-list"
import { FilterbyBuilder } from "../../components/entities/portal/filterby-builder/filterby-builder"
import { MainTitle } from "../../components/common/main-title/main-title"
import { useDebounce } from "../../hooks/use-debounce"


export const EntityPortal = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [items, setItems] = useState<EntityItem[]>([])
    const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(true)

    const debouncedSetIsLoading = useDebounce(setIsLoading, 1000)

    const toggleIsFilterSectionOpen = () => setIsFilterSectionOpen(!isFilterSectionOpen)
    const sortBy = useEntitySortHandler()


    useEffect(() => {
        if (!isLoading || !ENTITY) return

        const loadItems = async () => {
            if (!isLoading) return

            const primaryFilter = ENTITY.listPageInfo.filters.find(filter => filter.type === 'primary_text')
            const filters = ENTITY.listPageInfo.filters.filter(filter => filter.type !== 'primary_text')
            const optionalFilter = {
                primaryFilter,
                filters
            }

            try {
                const { dbInfo: { name: dbName, fallbackDB } } = ENTITY
                const items = await entityService.queryEntityItems(dbName, sortBy, optionalFilter, fallbackDB) as EntityItem[]
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
        },
        listPageInfo: {
            filters,
            sorts
        }
    } = ENTITY

    const titleAdditionalCmp = <OptionsList
        sorts={sorts}
        filters={filters}
        isFilterSectionOpen={isFilterSectionOpen}
        setIsLoading={setIsLoading}
        toggleIsFilterSectionOpen={toggleIsFilterSectionOpen}
    />

    return (
        <section className="entities-pages--entity-portal__container">
            <MainTitle text={listTitle} Icon={Icon} isSticky={true} additionalCmp={titleAdditionalCmp} />

            <ActiveFilterList possibleFiilters={filters} setIsLoading={setIsLoading} />
            {isFilterSectionOpen && <FilterbyBuilder
                filters={filters}
                debouncedSetIsLoading={debouncedSetIsLoading}
            />}

            {items.length
                ? <EntityList entity={ENTITY} items={items} />
                : <ErrorMessage message="לא נמצאו פריטים להצגה" />}
        </section>
    )
}