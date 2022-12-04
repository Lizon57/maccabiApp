import { useState } from "react"

import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"

import { Dropdown } from "../../../../../common/dropdown/dropdown"

import { AiFillCaretDown } from "react-icons/ai"


const TYPE_NAMES = ['מתחיל ב', 'נגמר ב', 'כולל את']

export const TextFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const [type, setType] = useState(2)


    return (
        <div className="entities-portal--text-filter__container">
            <span className="title">{filter.title}</span>

            <div className="content-container">
                <input type="text" placeholder="חיפוש (ניתן להפריד בפסיק)" />

                <Dropdown controllerText={TYPE_NAMES[type]} controllerIcon={AiFillCaretDown} title="שיטת סינון">
                    <div className="options-container">
                        {TYPE_NAMES.map((typeName, idx) => <div
                            key={typeName}
                            className="type-option"
                            onClick={() => setType(idx)}
                        >{typeName}</div>)}
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
