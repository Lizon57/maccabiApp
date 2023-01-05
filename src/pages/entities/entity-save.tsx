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
    const entity = entityService.getEntityByName(entityName)
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)
    const addAppMessage = useAppMessage()

    const [currStageIdx, setCurrStageIdx] = useState(0)
    const [stagesStatus, setStagesStatus] = useState<boolean[]>(getInitStagesStatus(entity?.saveItemPage.stages || []))

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
        if ((id && !isLoading) || !entity) return

        if (!id) {
            const emptyItem = emptyEntityItemService.get(entity.name)
            dispatch(updateItem(emptyItem))
            setIsLoading(false)
            return
        }

        const loadItem = async () => {
            try {
                const item = await entityService.getEntityItemById(id, entity) as EntityItem
                dispatch(updateItem(item))
            } catch (_err) { console.log(_err) }
            finally {
                setIsLoading(false)
            }
        }
        loadItem()
    }, [dispatch, entity, id, isLoading])


    useEffect(() => {
        if (!entity) return

        const stagesStatus = entity.saveItemPage.stages.map(({ isRequire, type, option }) => {
            if (!isRequire) return true
            const { relatedInfo } = item
            let isFilled = true
            switch (type) {
                case 'page-details':
                    if (!item.entityInfo.name.display) isFilled = false
                    break

                case 'associate-related-data':
                    option?.relateds?.forEach(related => {
                        switch (related.type) {
                            case 'profile':
                                if (related.isRequire && !relatedInfo?.miniProfile?.profileId) isFilled = false
                                break

                            case 'branch':
                                if (related.isRequire && !relatedInfo?.branchIds.length) isFilled = false
                                break
                        }
                    })
                    break

                case 'image-upload':
                    if ((item.miniImages?.length || 0) < (option?.minImageCount || 0)
                        || (item.miniImages?.length || 0) > (option?.maxImageCount || Infinity)
                    ) isFilled = false
            }

            return isFilled
        })

        setStagesStatus(stagesStatus)
    }, [entity, item]) // eslint-disable-line react-hooks/exhaustive-deps


    const changeCurrStageIdx = (idx: number) => setCurrStageIdx(idx)


    const getIsSaveable = () => {
        const saveableIdx = stagesStatus.findIndex(status => status === false)
        return (saveableIdx === -1)
    }


    const saveItem = async () => {
        if (!getIsSaveable() || !entity) return
        const editedItem = structuredClone(item) as EntityItem
        const isEdited = !!editedItem.id
        if (id) editedItem.id = id

        const { display: displayName } = editedItem.entityInfo.name

        try {
            await entityItemService.save(editedItem, entity?.dbInfo.name, entity?.dbInfo.fallbackDB)
            const text = `${isEdited ? 'עריכת' : 'הוספת'} הדף ${displayName} בוצעה בהצלחה`
            const title = `${isEdited ? 'עריכה' : 'הוספה'} בוצעה בהצלחה`
            addAppMessage({ text, title, type: 'success' })
        } catch (err) {
            const text = `${isEdited ? 'עריכת' : 'הוספת'} הדף ${displayName} נכשלה`
            const title = `${isEdited ? 'עריכה' : 'הוספה'} נכשלה`
            addAppMessage({ text, title, type: 'fail' })
        } finally {
            navigate(location.pathname.replace('/save', ''))
        }
    }


    if (!entity) return <ErrorMessage message="התרחשה שגיאה בטעינת העמוד" />
    if (isLoading) return <Loader />

    const { saveItemPage: { stages } } = entity

    const stageStepperProps = { stages, stagesStatus, currStageIdx, changeCurrStageIdx, saveItem }

    return (
        <main className="entities-pages--entity-save__container">
            <StageStepper {...stageStepperProps} />

            <MainTitle
                text={stages[currStageIdx].title}
                Icon={stages[currStageIdx].icon}
            />

            <DynamicEntitySaveStage
                stage={stages[currStageIdx]}
                entityName={entity.name}
            />

            <div className="save-stages-navigation">
                <div className="stages">
                    {!!currStageIdx &&
                        <button className="prev" onClick={() => changeCurrStageIdx(currStageIdx - 1)}>שלב קודם</button>
                    }

                    {(stagesStatus[currStageIdx] && !(currStageIdx === stages.length - 1)) &&
                        !(currStageIdx + 1 === stagesStatus.length) &&
                        <button className="next" onClick={() => changeCurrStageIdx(currStageIdx + 1)}>שלב הבא</button>
                    }
                </div>

                {getIsSaveable() &&
                    <div className="save">
                        <button title="שמור" onClick={saveItem}>שמור</button>
                    </div>
                }
            </div>
        </main >
    )
}