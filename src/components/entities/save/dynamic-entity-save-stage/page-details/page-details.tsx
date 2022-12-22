import { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"

import { useStoreSelector } from "../../../../../hooks/store/use-store-selector"
import { useStoreDispatch } from "../../../../../hooks/store/use-store-dispatch"
import { updateItem } from "../../../../../store/slicer/entity-save-slicer"


export const PageDetails = () => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const [value, setValue] = useState<string>(item.entityInfo.name.display || '')


    useEffect(() => {
        const editedItem = structuredClone(item)
        editedItem.entityInfo.name.display = value

        dispatch(updateItem(editedItem))
    }, [value, dispatch]) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="entity-save-cmp--page-details__container">
            <div className="option">
                <span className="name">שם העמוד</span>

                <span className="input-wrapper">
                    <input type="text" value={value} placeholder="שם העמוד" onChange={ev => setValue(ev.currentTarget.value)} />
                    {value && <span className="clear-icon" title="נקה" onClick={() => setValue('')}>
                        <FaTimes size={12} />
                    </span>}
                </span>
            </div>
        </div>
    )
}