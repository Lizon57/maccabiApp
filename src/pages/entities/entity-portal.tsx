import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"

import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

import { EntityItem } from "../../types/entity/entities/entity-item"

import { entityService } from "../../services/entities/entity-service"

import { useEntitySortHandler } from "../../hooks/entities/use-entity-sort-parser"
import { useOnWindowResize } from "../../hooks/use-on-window-resize"
import { usePageDataCmp } from "../../hooks/pages/use-page-data-cmp"
import { usePageType } from "../../hooks/pages/use-page-type"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { EntityList } from "../../components/entities/portal/entity-list/entity-list"
import { OptionsList } from "../../components/entities/portal/options-list/options-list"
import { ActiveFilterList } from "../../components/entities/portal/active-filter/active-filter-list"
import { FilterbyBuilder } from "../../components/entities/portal/filterby-builder/filterby-builder"
import { MainTitle } from "../../components/common/main-title/main-title"
import { SeoImplement } from "../../components/common/seo-implement"


export const EntityPortal = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const { browseableBranchesIds: userPrefBranchesFilter } = useSelector((state: RootState) => state.userStateModule.user)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()
    const [items, setItems] = useState<EntityItem[]>()
    const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(window.innerWidth > 700)

    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()

    const debouncedSetIsLoading = useDebouncedCallback(setIsLoading, 1000)

    usePageDataCmp('social-network-preview')
    usePageType('entity-item-portal')


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
            filters = filters.filter(({ type }) => type !== 'primary_text')
            const filter = {
                primaryFilter,
                filters
            }

            try {
                const { dbInfo: { name: dbName, fallbackDB } } = ENTITY
                const items = await entityService.queryEntityItems(dbName, sortBy, filter, fallbackDB) as EntityItem[]
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


    useEffect(() => {
        if (!ENTITY) return
        let { filters } = ENTITY.listPageInfo

        const branchesFilterIdx = filters.findIndex(filter => filter.key === 'relatedInfo.branchIds')
        if (branchesFilterIdx >= 0) {
            debouncedSetIsLoading(true)
            const paramName = filters[branchesFilterIdx].param
            params.set(paramName, userPrefBranchesFilter.join())
            navigate({ search: params.toString().replaceAll('%2C', ',') })
        }
    }, [userPrefBranchesFilter, navigate]) // eslint-disable-line react-hooks/exhaustive-deps


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
    const { display: entityDisplayName, openGraph } = ENTITY.entityInfo.name

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
                appTitle={entityDisplayName}
                openGraphTitle={openGraph}
                pageDescription={ENTITY.entityInfo.description.short}
                openGraphDescription={ENTITY.entityInfo.description.short}
            />
        </>
    )
}