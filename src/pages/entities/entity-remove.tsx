import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppMessage } from "../../hooks/store/actions/use-app-message"
import { BsFillTrash2Fill } from "react-icons/bs"

import { entityService } from "../../services/entities/entity-service"

import { Entity } from "../../types/entity/entity"
import { EntityItem } from "../../types/entity/entities/entity-item"

import { MainTitle } from "../../components/common/main-title/main-title"
import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { entityItemService } from "../../services/entities/entity-item-service"


export const EntityRemove = (entity: Entity) => {
    const [item, setItem] = useState<EntityItem>()
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const { id: EntityItemId } = useParams()
    const navigate = useNavigate()
    const addAppMessage = useAppMessage()


    useEffect(() => {
        if (!isLoading || !EntityItemId) return

        const loadItem = async () => {
            if (!EntityItemId) return

            try {
                const item = await entityService.getEntityItemById(EntityItemId, entity) as EntityItem
                setItem(item)
            } catch ({ message }) {
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [isLoading, entity, EntityItemId])


    const onCancel = () => navigate('/')

    const onApprove = async () => {
        if (!EntityItemId) return
        try {
            await entityItemService.remove(EntityItemId, entity?.dbInfo.name, entity.dbInfo.fallbackDB)
            addAppMessage(
                { text: `מחיקת הדף ${item?.entityInfo.name.display} בוצעה בהצלחה`, title: 'מחיקה בוצעה בהצלחה', type: 'success' }
            )
        } catch (err) {
            addAppMessage(
                { text: `מחיקת הדף ${item?.entityInfo.name.display} נכשלה`, title: 'מחיקה נכשלה', type: 'fail' }
            )
        } finally {
            navigate(`/${entity.name}`)
        }
    }


    if (isLoading || !EntityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />

    return (
        <main className="entities-pages--entity-remove__container">
            <MainTitle text="מחיקת ערך" Icon={BsFillTrash2Fill} />

            <p className="action-text">
                האם אתה בטוח שברצונך למחוק את הערך {item.entityInfo.name.display}?
            </p>

            <div className="buttons-container">
                <button className="cancel" title="בטל מחיקה" onClick={onCancel}>לא</button>
                <button className="approve" title="אשר מחיקה" onClick={onApprove}>כן</button>
            </div>
        </main>
    )
}