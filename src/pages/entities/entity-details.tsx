import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { entityService } from "../../services/entities/entity-service"

import { Entity } from "../../types/entity/entity"
import { EntityItem } from "../../types/entity/entity-item"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"


export const EntityDetails = (entity: Entity) => {
    const { id: EntityItemId } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [item, setItem] = useState<EntityItem>()


    useEffect(() => {
        if (!isLoading || !EntityItemId) return

        const loadItem = async () => {
            if (!isLoading) return
            const item = await entityService.getEntityItemById(EntityItemId, entity) as EntityItem
            setItem(item)
            try {

            } catch ({ message }) {
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [isLoading, entity, EntityItemId])


    if (isLoading || !EntityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />

    const { entityInfo: { image: { icon: Icon } } } = entity
    const { entityInfo: { name } } = item

    return (
        <section className="entities-pages--entity-display__container">
            <h2 className="title">
                <span className="icon">{<Icon />}</span>
                <span className="title">{name.display}</span>
            </h2>
        </section>
    )
}