import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { clearDisplayEntityItem } from "../../../store/action/display-entity-item-action"
import { clearDisplayEntity, updateDisplayEntity } from "../../../store/action/display-entity-action"

import { usePageType } from "../../../hooks/pages/use-page-type"

import { ENTITIES_LIST } from "../../../constans/entities-list"

import { Entity } from "../../../models/interfaces/entities/entity"

import { ArticleEntityDetails } from "./article-entity-details"
import { PageCategoryEntityDetails } from "./page-category-entity-details"
import { ErrorMessage } from "../../../components/common/error-message/error-message"


const EntityDetailsWrapper = () => {
    let { pathname } = useLocation()
    pathname = pathname.split('/')[1]
    const entity = ENTITIES_LIST[pathname]

    return (
        <DynamicEntityDetails entity={entity} />
    )
}


const DynamicEntityDetails = ({ entity }: Props) => {
    usePageType('entity-item-details')

    useEffect(() => {
        updateDisplayEntity(entity)

        return () => {
            clearDisplayEntity()
            clearDisplayEntityItem()
        }
    }, []) // eslint-disable-line



    const basicProps = { entity }
    switch (entity.detailsPageInfo.type) {
        case 'article':
            return <ArticleEntityDetails {...basicProps} />

        case 'page-category':
            return <PageCategoryEntityDetails {...basicProps} />

        default:
            return <ErrorMessage message="שגיאת מערכת, אנא נסה שנית מאוחר יותר" />
    }
}

export default EntityDetailsWrapper


type Props = {
    entity: Entity
}