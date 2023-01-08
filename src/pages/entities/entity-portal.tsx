import { useEffect, useState } from "react"

import { EntityItem } from "../../types/entity/entities/entity-item"

import { entityService } from "../../services/entities/entity-service"

import { useEntitySortHandler } from "../../hooks/entities/use-entity-sort-parser"
import { useDebounce } from "../../hooks/use-debounce"
import { useOnWindowResize } from "../../hooks/use-on-window-resize"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"

import { EntityList } from "../../components/entities/portal/entity-list/entity-list"
import { OptionsList } from "../../components/entities/portal/options-list/options-list"
import { ActiveFilterList } from "../../components/entities/portal/active-filter/active-filter-list"
import { FilterbyBuilder } from "../../components/entities/portal/filterby-builder/filterby-builder"
import { MainTitle } from "../../components/common/main-title/main-title"
import { SeoImplement } from "../../components/common/seo-implement"
import { usePageDataCmp } from "../../hooks/pages/usePageDataCmp"


export const EntityPortal = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()
    const [items, setItems] = useState<EntityItem[]>()
    const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(window.innerWidth > 700)

    const debouncedSetIsLoading = useDebounce(setIsLoading, 1000)

    usePageDataCmp('social-network-preview')


    const changeFilterSectionOpenOnWindowResize = () => {
        const { innerWidth } = window
        if (innerWidth < 700 && isFilterSectionOpen) setIsFilterSectionOpen(false)
        else if (innerWidth > 700 && !isFilterSectionOpen) setIsFilterSectionOpen(true)
    }
    useOnWindowResize(changeFilterSectionOpenOnWindowResize)

    const toggleIsFilterSectionOpen = () => setIsFilterSectionOpen(!isFilterSectionOpen)

    const sortBy = useEntitySortHandler()


    useEffect(() => {
        if (!isLoading || !ENTITY) return

        const loadItems = async () => {
            if (!isLoading) return
            let { filters } = ENTITY.listPageInfo

            const primaryFilter = filters.find(({ type }) => type === 'primary_text')
            filters = ENTITY.listPageInfo.filters.filter(({ type }) => type !== 'primary_text')
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

    const FilterbyBuilderProps = { filters, debouncedSetIsLoading }

    return (
        <>
            <section className="entities-pages--entity-portal__container">
                <MainTitle text={listTitle} Icon={Icon} isSticky additionalCmp={titleAdditionalCmp} />

                <ActiveFilterList possibleFiilters={filters} setIsLoading={setIsLoading} />
                {isFilterSectionOpen && <FilterbyBuilder {...FilterbyBuilderProps} />}

                {items?.length
                    ? <EntityList entity={ENTITY} items={items} />
                    : <ErrorMessage message="לא נמצאו פריטים להצגה" />}
            </section>

            <SeoImplement
                appTitle={ENTITY.entityInfo.name.display}
                pageDescription={ENTITY.entityInfo.description.short}
            />
        </>
    )
}