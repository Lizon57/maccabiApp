import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import { useStoreDispatch } from "../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../hooks/store/use-store-selector"
import { updateItem } from "../../store/slicer/entity-save-slicer"

import { entityService } from "../../services/entities/entity-service"

import { EntityItem } from "../../types/entity/entity-item"
import { EntitySaveItemStage } from "../../types/entity/save/entity-save-item-stage"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { Loader } from "../../components/common/loader/loader"
import { DynamicEntitySaveStage } from "../../components/entities/save/dynamic-entity-save-stage/dynamic-entity-save-stage"
import { MainTitle } from "../../components/common/main-title/main-title"
import { StageStepper } from "../../components/entities/save/stage-stepper/stage-stepper"


const getInitStagesStatus = (stages: EntitySaveItemStage[]) => new Array(stages.length).fill(false)

export const EntitySave = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const [currStageIdx, setCurrStageIdx] = useState(0)
    const [stagesStatus, setStagesStatus] = useState<boolean[]>(getInitStagesStatus(ENTITY?.saveItemPage.stages || []))

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // console.log(item)
    }, [item])


    const { id } = useParams()
    useEffect(() => {
        if ((id && !isLoading) || !ENTITY) return
        if (!id) return setIsLoading(false)

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
                        || (item.miniImages?.length || 0) > (stage.option?.maxImageCount || 0)
                    ) isFilled = false
            }

            return isFilled
        })

        setStagesStatus(stagesStatus)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ENTITY, item])


    const changeCurrStageIdx = (idx: number) => setCurrStageIdx(idx)


    const getIsSaveable = () => {
        const saveableIdx = stagesStatus.findIndex(status => status === false)
        return (saveableIdx === -1) ? true : false
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
                    <button className="save" title="שמור">שמור</button>
                }
            </div>
        </main >
    )
}