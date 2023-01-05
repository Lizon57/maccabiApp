import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useStoreDispatch } from "../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../hooks/store/use-store-selector"
import { clearItem, setItem } from "../../store/slicer/display-entity-slicer"

import { entityService } from "../../services/entities/entity-service"

import { Entity } from "../../types/entity/entity"
import { EntityItem } from "../../types/entity/entities/entity-item"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { ArticleHeadCmpList } from "../../components/entities/details/article-head-cmp/article-head-cmp-list"
import { ArticleAdditionalContentCmpList } from "../../components/entities/details/article-additional-content-cmp/article-additional-content-cmp-list"
import { SeoImplement } from "../../components/common/seo-implement"


export const EntityDetails = (entity: Entity) => {
    const { id: EntityItemId } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.displayEntityModule)

    useEffect(() => {
        if (!isLoading || !EntityItemId) return

        const loadItem = async () => {
            if (!isLoading) return
            try {
                const item = await entityService.getEntityItemById(EntityItemId, entity) as EntityItem
                dispatch(setItem(item))
            } catch ({ message }) {
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [isLoading, entity, EntityItemId, dispatch])

    useEffect(() => {
        return () => {
            dispatch(clearItem())
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    if (isLoading || !EntityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />


    const { structure } = entity.detailsPageInfo

    return (
        <>
            <section className="entities-pages--entity-display__container">
                {!!structure?.head?.length &&
                    <div className="primary-content">
                        <ArticleHeadCmpList cmps={structure?.head} />
                    </div>
                }

                {!!structure?.additional?.length &&
                    <div className="additional-content">
                        <ArticleAdditionalContentCmpList cmps={structure?.additional} />
                    </div>}
            </section>

            <SeoImplement
                appTitle={`${item.entityInfo.name.display} (${entity.entityInfo.name.display})`}
            />
        </>
    )
}