import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { insertAppMessage } from "../../store/action/app-state-action"

import { entityItemService } from "../../services/entities/entity-item-service"

import { Entity } from "../../models/interfaces/entities/entity"
import { EntityItem } from "../../models/types/entities/item/entity-item"

import { ICON_TYPE_MAP } from "../../constans/icon-type-map"

import { MainTitle } from "../../components/common/main-title/main-title"
import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { SeoImplement } from "../../components/common/seo-implement/seo-implement"


export const EntityRemove = (entity: Entity) => {
    const [item, setItem] = useState<EntityItem>()
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string>()

    const { id: EntityItemId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        if (!isLoading || !EntityItemId) return

        const loadItem = async () => {
            if (!EntityItemId) return

            try {
                const item = await entityItemService.getById(entity.name, EntityItemId, true) as EntityItem
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
            await entityItemService.remove(entity.name, EntityItemId)
            insertAppMessage(
                { text: `מחיקת הדף ${item?.entityInfo.name.display} בוצעה בהצלחה`, title: 'מחיקה בוצעה בהצלחה', type: 'success' }
            )
        } catch (err) {
            insertAppMessage(
                { text: `מחיקת הדף ${item?.entityInfo.name.display} נכשלה`, title: 'מחיקה נכשלה', type: 'fail' }
            )
        } finally {
            navigate(`/${entity.name}`)
        }
    }


    if (isLoading || !EntityItemId || !item) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />


    const { display: displayName } = item.entityInfo.name
    const Icon = ICON_TYPE_MAP.remove.trash

    return (
        <>
            <main className="entities-pages--entity-remove__container">
                <MainTitle text="מחיקת ערך" Icon={Icon} />

                <p className="action-text">
                    האם אתה בטוח שברצונך למחוק את הערך {displayName}?
                </p>

                <div className="buttons-container">
                    <button className="cancel" title="בטל מחיקה" onClick={onCancel}>לא</button>
                    <button className="approve" title="אשר מחיקה" onClick={onApprove}>כן</button>
                </div>
            </main>

            <SeoImplement
                appTitle={`${item.entityInfo.name.display} (${entity.entityInfo.name.display}) - הסרה`}
                noIndex
            />
        </>
    )
}