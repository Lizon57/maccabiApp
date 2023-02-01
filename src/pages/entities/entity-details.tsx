import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { clearDisplayEntity, updateDisplayEntity } from "../../store/action/display-entity-action"
import { updateDisplayEntityItem } from "../../store/action/display-entity-item-action"

import { usePageDataCmp } from "../../hooks/pages/use-page-data-cmp"
import { usePageType } from "../../hooks/pages/use-page-type"

import { entityService } from "../../services/entities/entity-service"
import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"
import { entityItemService } from "../../services/entities/entity-item-service"

import { Entity } from "../../types/entity/entity"
import { EntityItem } from "../../types/entity/entities/entity-item"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { ArticleHeadCmpList } from "../../components/entities/details/article-head-cmp/article-head-cmp-list"
import { ArticleAdditionalContentCmpList } from "../../components/entities/details/article-additional-content-cmp/article-additional-content-cmp-list"
import { SeoImplement } from "../../components/common/seo-implement/seo-implement"


export const EntityDetails = (entity: Entity) => {
    const { id: entityItemId } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)

    usePageDataCmp('entity-item-toc')
    usePageType('entity-item-details')

    useEffect(() => {
        if (!entityItemId) return
        entityItemService.handleEntityItemView({ entityName: entity.name, entityItemId })
    }, [entity.name, entityItemId])


    useEffect(() => {
        if (!isLoading || !entityItemId) return

        const loadItem = async () => {
            if (!isLoading) return
            try {
                const item = await entityService.getEntityItemById(entityItemId, entity) as EntityItem
                updateDisplayEntityItem(item)
            } catch ({ message }) {
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [isLoading, entity, entityItemId])

    useEffect(() => {
        updateDisplayEntity(entity)

        return () => {
            clearDisplayEntity()
            updateDisplayEntityItem(emptyEntityItemService.get(''))
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    if (isLoading || !entityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />


    const { structure } = entity.detailsPageInfo
    const { display: entityName } = entity.entityInfo.name
    const { display: itemName } = item.entityInfo.name

    return (
        <>
            <section className="entities-pages--entity-display__container">
                {!!structure?.head?.length &&
                    <div className="primary-content">
                        <ArticleHeadCmpList cmps={structure?.head} entityName={entityName} />
                    </div>
                }

                {!!structure?.additional?.length &&
                    <div className="additional-content">
                        <ArticleAdditionalContentCmpList cmps={structure?.additional} />
                    </div>}
            </section>

            <SeoImplement
                appTitle={itemName}
                openGraphTitle={itemName}
                openGraphDescription="כל מה שאוהד מכבי צריך לדעת"
                openGraphImage={item?.miniImages[0]?.imageUrl || ''}
            />
        </>
    )
}