import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"

import { entityItemService } from "../../services/entities/entity-item-service"

import { Entity } from "../../models/interfaces/entities/entity"
import { EntityItem } from "../../models/types/entities/item/entity-item"

import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { clearDisplayEntity, updateDisplayEntity } from "../../store/action/display-entity-action"

import { ENTITIES_LIST } from "../../constans/entities-list"

import { useOnWindowResize } from "../../hooks/use-on-window-resize"
import { usePageDataCmp } from "../../hooks/pages/use-page-data-cmp"
import { usePageType } from "../../hooks/pages/use-page-type"

import { Loader } from "../../components/common/loader/loader"
import { ErrorMessage } from "../../components/common/error-message/error-message"
import { MainTitle } from "../../components/common/main-title/main-title"
import { OptionsList } from "../../components/entities/portal/options-list/options-list"
import { ActiveFilterList } from "../../components/entities/portal/active-filter/active-filter-list"
import { FilterbyBuilder } from "../../components/entities/portal/filterby-builder/filterby-builder"
import { SeoImplement } from "../../components/common/seo-implement/seo-implement"
import { EntityList } from "../../components/entities/portal/entity-list/entity-list"
import { errorHandler } from "../../services/util/error-handler"


const EntityPortalWrapper = () => {
    let { pathname } = useLocation()
    pathname = pathname.split('/')[1]
    const entity = ENTITIES_LIST[pathname]
    return (
        <EntityPortal entity={entity} />
    )
}


const EntityPortal = ({ entity }: Props) => {
    const { browseableBranchesIds: userPrefBranchesFilter } = useSelector((state: RootState) => state.userStateModule.user)
    const [items, setItems] = useState<EntityItem[]>()
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()
    const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(window.innerWidth > 700)

    const { searchParams } = new URL(window.location.href)

    usePageDataCmp('social-network-preview')
    usePageType('entity-item-portal')

    const toggleIsFilterSectionOpen = () => setIsFilterSectionOpen(!isFilterSectionOpen)
    const debouncedSetIsLoading = useDebouncedCallback(setIsLoading, 1000)


    const fetchItems = async () => {
        try {
            if (!searchParams.get('fBranchIds')) searchParams.set('fBranchIds', userPrefBranchesFilter)
            const items = await entityItemService.query(entity.name, searchParams)
            setItems(items)
        } catch ({ message }) {
            const errorMessage = errorHandler(message, false)
            setErrorMessage(errorMessage)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setIsLoading(true)
    }, [entity])

    useEffect(() => {
        if (!isLoading) return
        fetchItems()
    }, [searchParams, userPrefBranchesFilter]) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        updateDisplayEntity(entity)

        return () => {
            clearDisplayEntity()
        }
    }, [entity])


    useEffect(() => {
        setIsLoading(true)
    }, [userPrefBranchesFilter])


    const changeFilterSectionOpenOnWindowResize = () => {
        const { innerWidth } = window
        if (innerWidth < 700 && isFilterSectionOpen) setIsFilterSectionOpen(false)
        else if (innerWidth > 700 && !isFilterSectionOpen) setIsFilterSectionOpen(true)
    }
    useOnWindowResize(changeFilterSectionOpenOnWindowResize)


    const {
        entityInfo: { image: { icon: Icon }, name: { listTitle } },
        listPageInfo: { filters, sorts }
    } = entity

    const titleAdditionalCmp = <OptionsList
        sorts={sorts}
        filters={filters}
        isFilterSectionOpen={isFilterSectionOpen}
        setIsLoading={setIsLoading}
        toggleIsFilterSectionOpen={toggleIsFilterSectionOpen}
    />

    const FilterbyBuilderProps = { filters, debouncedSetIsLoading }
    const { display: entityDisplayName, openGraph } = entity.entityInfo.name


    return (
        <>
            <section className="entities-pages--entity-portal__container">
                <MainTitle text={listTitle} Icon={Icon} isSticky additionalCmp={titleAdditionalCmp} />

                <ActiveFilterList possibleFilters={filters} searchParams={searchParams} setIsLoading={setIsLoading} />
                {isFilterSectionOpen && <FilterbyBuilder {...FilterbyBuilderProps} />}

                {isLoading && <Loader />}
                {errorMessage && <ErrorMessage message={errorMessage} />}

                {(!isLoading && !errorMessage && !items?.length) && <ErrorMessage message="לא נמצאו פריטים להצגה" />}
                {(!isLoading && !errorMessage && !!items?.length) && <EntityList entity={entity} items={items} />}
            </section>

            <SeoImplement
                appTitle={entityDisplayName}
                openGraphTitle={openGraph}
                pageDescription={entity.entityInfo.description.short}
                openGraphDescription={entity.entityInfo.description.short}
            />
        </>
    )
}

export default EntityPortalWrapper


type Props = {
    entity: Entity
}