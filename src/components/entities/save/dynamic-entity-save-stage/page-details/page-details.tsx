import { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../store/store"
import { setSaveEntityItem } from "../../../../../store/action/save-entity-item-action"


export const PageDetails = () => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const [value, setValue] = useState<string>(item.entityInfo.name.display)


    useEffect(() => {
        const editedItem = structuredClone(item)
        editedItem.entityInfo.name.display = value

        setSaveEntityItem(editedItem)
    }, [value]) // eslint-disable-line react-hooks/exhaustive-deps


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