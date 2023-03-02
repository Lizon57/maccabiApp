import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"

import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { clearDisplayEntity, updateDisplayEntity } from "../../store/action/display-entity-action"
import { clearDisplayEntityItem, updateDisplayEntityItem } from "../../store/action/display-entity-item-action"

import { usePageDataCmp } from "../../hooks/pages/use-page-data-cmp"
import { usePageType } from "../../hooks/pages/use-page-type"

import { ENTITIES_LIST } from "../../constans/entities-list"

import { entityItemService } from "../../services/entities/entity-item-service"

import { Entity } from "../../models/interfaces/entities/entity"
import { EntityItem } from "../../models/types/entities/item/entity-item"

import { Loader } from "../../components/common/loader/loader"
import { ErrorMessage } from "../../components/common/error-message/error-message"
import { ArticleHeadCmpList } from "../../components/entities/details/article-head-cmp/article-head-cmp-list"
import { ArticleAdditionalContentCmpList } from "../../components/entities/details/article-additional-content-cmp/article-additional-content-cmp-list"
import { SeoImplement } from "../../components/common/seo-implement/seo-implement"
import { BreadCrumbs } from "../../components/common/bread-crumbs/bread-crumbs"
import { RatePage } from "../../components/entities/details/reate-page/rate-page"


const EntityDetailsWrapper = () => {
    let { pathname } = useLocation()
    pathname = pathname.split('/')[1]
    const entity = ENTITIES_LIST[pathname]

    return (
        <EntityDetails entity={entity} />
    )
}


const EntityDetails = ({ entity }: Props) => {
    const { id: entityItemId } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)

    const path = useLocation().pathname.split('/')[1] || ''

    usePageDataCmp('entity-item-toc')
    usePageType('entity-item-details')


    useEffect(() => {
        if (!isLoading || !entityItemId) return

        const loadItem = async () => {
            if (!isLoading) return
            try {
                const item = await entityItemService.getById(entity.name, entityItemId) as EntityItem
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
            clearDisplayEntityItem()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    if (isLoading || !entityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />


    const { detailsPageInfo: { structure }, entityInfo: { name: { display: entityName } } } = entity
    const { display: itemName } = item.entityInfo.name

    return (
        <>
            <section className="entities-pages--entity-display__container">
                <div className="head-info-container">
                    <BreadCrumbs path={[{ text: entityName, link: path }, { text: itemName }]} />
                    <RatePage />
                </div>

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
                appTitle={`${itemName} (${entity.entityInfo.name.display})`}
                openGraphTitle={itemName}
                openGraphDescription="כל מה שאוהד מכבי צריך לדעת"
                openGraphImage={item?.miniImages[0]?.imageUrl || ''}
            />
        </>
    )
}

export default EntityDetailsWrapper


type Props = {
    entity: Entity
}