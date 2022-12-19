import { useState, useEffect } from "react"

import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useStoreDispatch } from "../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../hooks/store/use-store-selector"
import { setEmptyItem, updateItem } from "../../store/slicer/entity-save-slicer"
import { useAppMessage } from "../../hooks/store/actions/use-app-message"

import { entityService } from "../../services/entities/entity-service"
import { entityItemService } from "../../services/entities/entity-item-service"
import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"

import { EntitySaveItemStage } from "../../types/entity/save/entity-save-item-stage"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { DynamicEntitySaveStage } from "../../components/entities/save/dynamic-entity-save-stage/dynamic-entity-save-stage"
import { MainTitle } from "../../components/common/main-title/main-title"
import { StageStepper } from "../../components/entities/save/stage-stepper/stage-stepper"
import { EntityItem } from "../../types/entity/entities/entity-item"


const getInitStagesStatus = (stages: EntitySaveItemStage[]) => new Array(stages.length).fill(false)

export const EntitySave = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)
    const addAppMessage = useAppMessage()

    const [currStageIdx, setCurrStageIdx] = useState(0)
    const [stagesStatus, setStagesStatus] = useState<boolean[]>(getInitStagesStatus(ENTITY?.saveItemPage.stages || []))

    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
        return () => {
            dispatch(setEmptyItem())
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if ((id && !isLoading) || !ENTITY) return

        if (!id) {
            const emptyItem = emptyEntityItemService.get(ENTITY.name)
            dispatch(updateItem(emptyItem))
            setIsLoading(false)
            return
        }

        const loadItem = async () => {
            try {
                const item = await entityService.getEntityItemById(id, ENTITY) as EntityItem
                dispatch(updateItem(item))
            } catch (_err) { console.log(_err) }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [dispatch, ENTITY, id, isLoading])


    useEffect(() => {
        if (!ENTITY) return

        const stagesStatus = ENTITY.saveItemPage.stages.map(stage => {
            if (!stage.isRequire) return true
            let isFilled = true
            switch (stage.type) {
                case 'associate-related-data':
                    stage.option?.relateds?.forEach(related => {
                        switch (related.type) {
                            case 'profile':
                                if (related.isRequire && !item.relatedInfo?.miniProfile?.profileId) isFilled = false
                                break

                            case 'branch':
                                if (related.isRequire && !item.relatedInfo?.branchIds.length) isFilled = false
                                break
                        }
                    })
                    break

                case 'image-upload':
                    if ((item.miniImages?.length || 0) < (stage.option?.minImageCount || 0)
                        || (item.miniImages?.length || 0) > (stage.option?.maxImageCount || Infinity)
                    ) isFilled = false
            }

            return isFilled
        })

        setStagesStatus(stagesStatus)
    }, [ENTITY, item]) // eslint-disable-line react-hooks/exhaustive-deps


    const changeCurrStageIdx = (idx: number) => setCurrStageIdx(idx)


    const getIsSaveable = () => {
        const saveableIdx = stagesStatus.findIndex(status => status === false)
        return (saveableIdx === -1) ? true : false
    }


    const saveItem = async () => {
        if (!getIsSaveable() || !ENTITY) return
        const editedItem = structuredClone(item) as EntityItem
        const isEdited = !!editedItem.id
        if (id) editedItem.id = id

        try {
            await entityItemService.save(editedItem, ENTITY?.dbInfo.name, ENTITY?.dbInfo.fallbackDB)
            addAppMessage(
                isEdited
                    ? { text: `עריכת הדף ${editedItem.entityInfo.name.display} בוצעה בהצלחה`, title: 'עריכה בוצעה בהצלחה', type: 'success' }
                    : { text: `הוספת הדף ${editedItem.entityInfo.name.display} בוצעה בהצלחה`, title: 'הוספה בוצעה בהצלחה', type: 'success' }
            )
        } catch (err) {
            addAppMessage(
                isEdited
                    ? { text: `עריכת הדף ${editedItem.entityInfo.name.display} נכשלה`, title: 'עריכה נכשלה', type: 'fail' }
                    : { text: `הוספת הדף ${editedItem.entityInfo.name.display} נכשלה`, title: 'הוספה נכשלה', type: 'fail' }
            )
        } finally {
            navigate(location.pathname.replace('/save', ''))
        }
    }


    if (!ENTITY) return <ErrorMessage message="התרחשה שגיאה בטעינת העמוד" />
    if (isLoading) return <Loader />

    const { saveItemPage: { stages } } = ENTITY

    return (
        <main className="entities-pages--entity-save__container">
            <StageStepper
                stages={stages}
                stagesStatus={stagesStatus}
                currStageIdx={currStageIdx}
                changeCurrStageIdx={changeCurrStageIdx}
                saveItem={saveItem}
            />

            <MainTitle
                text={ENTITY.saveItemPage.stages[currStageIdx].title}
                Icon={ENTITY.saveItemPage.stages[currStageIdx].icon}
            />

            <DynamicEntitySaveStage
                stage={stages[currStageIdx]}
                entityName={ENTITY.name}
            />

            <div className="stage-navigation">
                {!!currStageIdx &&
                    <button className="prev" onClick={() => changeCurrStageIdx(currStageIdx - 1)}>שלב קודם</button>
                }

                {(stagesStatus[currStageIdx] && !(currStageIdx === stages.length - 1)) &&
                    !(currStageIdx + 1 === stagesStatus.length) &&
                    <button className="next" onClick={() => changeCurrStageIdx(currStageIdx + 1)}>שלב הבא</button>
                }

                {getIsSaveable() &&
                    <button
                        title="שמור"
                        className="save"
                        onClick={saveItem}
                    >שמור</button>
                }
            </div>
        </main >
    )
}