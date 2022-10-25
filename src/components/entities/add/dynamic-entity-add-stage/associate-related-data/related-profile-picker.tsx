import { useState } from "react"
import { useDebounce } from "../../../../../hooks/use-debounce"

import { entityItemService } from "../../../../../services/entities/entity-item-service"


export const RelatedProfilePicker = () => {
    const [options, setOptions] = useState<{ id: string, name: string }[]>([])

    const handleInputChange = async ({ target: { value: pharse } }: React.ChangeEvent<HTMLInputElement>) => {
        if (!pharse.length) return []

        try {
            const items = await entityItemService.getMiniProfilesByPharse(pharse)
            setOptions(items)
        } catch (err) {
            console.log(err)
            setOptions([])
        }
    }
    const debouncedHandleInputChange = useDebounce(handleInputChange, 700)


    return (
        <div className="entity-add-cmp--related-profile-picker__container">
            <span className="title">בחירת פרופיל</span>

            <input
                type="text"
                list="related-profile-picker-list"
                onChange={debouncedHandleInputChange} />
            <datalist id="related-profile-picker-list">
                {options.map(option => <option key={option.id}>{option.name}</option>)}
            </datalist>
        </div>
    )
}