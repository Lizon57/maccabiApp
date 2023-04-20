import { useState, useEffect } from "react"

import { useLocation, useParams } from "react-router-dom"
import { usePageDataCmp } from "../../../hooks/pages/use-page-data-cmp"

import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { updateDisplayEntityItem } from "../../../store/action/display-entity-item-action"

import { entityItemService } from "../../../services/entities/entity-item-service"
import { errorHandler } from "../../../services/util/error-handler"

import { Entity } from "../../../models/interfaces/entities/entity"
import { EntityItem } from "../../../models/types/entities/item/entity-item"

import { PageHeadCmpList } from "../../../components/entities/details/article-head-cmp/page-head-cmp-list"
import { ArticleAdditionalContentCmpList } from "../../../components/entities/details/article-additional-content-cmp/page-additional-content-cmp-list"
import { SeoImplement } from "../../../components/common/seo-implement/seo-implement"
import { BreadCrumbs } from "../../../components/common/bread-crumbs/bread-crumbs"
import { RatePage } from "../../../components/entities/details/reate-page/rate-page"
import { ErrorMessage } from "../../../components/common/error-message/error-message"
import { Loader } from "../../../components/common/loader/loader"


export const ArticleEntityDetails = ({ entity }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const { id: entityItemId } = useParams()

    usePageDataCmp('entity-item-toc')

    const path = useLocation().pathname.split('/')[1] || ''


    useEffect(() => {
        if (!isLoading || !entityItemId) return

        const loadItem = async () => {
            try {
                const shouldUpdatePageView = !(entity.detailsPageInfo.type === 'article')
                const item = await entityItemService.getById(entity.name, entityItemId, shouldUpdatePageView) as EntityItem
                updateDisplayEntityItem(item)
            } catch ({ message }) {
                const errorMessage = errorHandler(message, false)
                setErrorMessage(errorMessage)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [isLoading, entity, entityItemId])


    if (isLoading || !entityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />

    const { detailsPageInfo: { structure }, entityInfo: { name: { display: entityName } } } = entity
    const { display: itemName } = item.entityInfo.name

    return (
        <>
            <section className="entities-pages--article-entity-details__container">
                <div className="head-info-container">
                    <BreadCrumbs path={[{ text: entityName, link: path }, { text: itemName }]} />
                    <RatePage />
                </div>

                {!!structure?.head?.length &&
                    <div className="primary-content">
                        <PageHeadCmpList cmps={structure?.head} />
                    </div>
                }

                {!!structure?.additional?.length &&
                    <div className="additional-content">
                        <ArticleAdditionalContentCmpList cmps={structure?.additional} />
                    </div>
                }
            </section>

            <SeoImplement
                appTitle={`${itemName} (${entity.entityInfo.name.display})`}
                openGraphTitle={itemName}
                openGraphDescription="כל מה שאוהד מכבי צריך לדעת"
                openGraphImage={item?.miniImages?.[0]?.imageUrl || ''}
            />
        </>
    )
}

type Props = {
    entity: Entity
}