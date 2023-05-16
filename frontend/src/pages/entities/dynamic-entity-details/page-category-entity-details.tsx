import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { updateDisplayEntityItem } from "../../../store/action/display-entity-item-action"

import { entityItemService } from "../../../services/entities/entity-item-service"
import { errorHandler } from "../../../services/util/error-handler"

import { Entity } from "../../../models/interfaces/entities/entity"
import { EntityItem } from "../../../models/types/entities/item/entity-item"

import { Loader } from "../../../components/common/loader/loader"
import { ErrorMessage } from "../../../components/common/error-message/error-message"
import { PageHeadCmpList } from "../../../components/entities/details/article-head-cmp/page-head-cmp-list"
import { ArticleAdditionalContentCmpList } from "../../../components/entities/details/article-additional-content-cmp/page-additional-content-cmp-list"
import { SeoImplement } from "../../../components/common/seo-implement/seo-implement"


export const PageCategoryEntityDetails = ({ entity }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const { id: entityItemId } = useParams()


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

    const { detailsPageInfo: { structure } } = entity
    const { display: itemName } = item.name

    return (
        <>
            <section className="entities-pages--page-category-entity-details__container">
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
                openGraphDescription={`כל מה שקשור ב-${itemName} באתר מכביפדיה`}
                openGraphImage={item?.miniImages?.[0]?.imageUrl || ''}
            />
        </>
    )
}


type Props = {
    entity: Entity
}