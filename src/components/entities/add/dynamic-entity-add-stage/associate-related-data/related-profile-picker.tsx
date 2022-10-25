import AsyncSelect from "react-select/async"

import { useDebounce } from "../../../../../hooks/use-debounce"

import { entityItemService } from "../../../../../services/entities/entity-item-service"

import { RelatedProfileOptionPreview } from "./related-profile-option-preview"


export const RelatedProfilePicker = () => {
    const getOptions = async (pharse: string) => {
        try {
            const items = await entityItemService.getMiniProfilesByPharse(pharse)
            const options = items.map(item => ({
                label: item.name,
                value: {
                    id: item.id,
                    name: item.name
                }
            }))
            return options as ProfileOption[]
        } catch (err) {
            console.log(err)
            return [] as ProfileOption[]
        }
    }
    const debouncedGetOptions = useDebounce(getOptions, 700)


    const loadOptions = (pharse: string) => {
        return new Promise<ProfileOption[]>((resolve) => {
            setTimeout(async () => {
                resolve(await debouncedGetOptions(pharse))
            }, 700)
        })
    }


    return (
        <div className="entity-add-cmp--related-profile-picker__container" title="בחירת פרופיל">
            <span className="title">בחירת פרופיל</span>

            <AsyncSelect
                loadOptions={loadOptions}
                styles={customStyles}
                placeholder="הקלד שם"
                noOptionsMessage={(pharse) => pharse.inputValue.length
                    ? `לא נמצא פרופיל המכיל את "${pharse.inputValue}"`
                    : 'יש להקליד ביטוי לחיפוש'}
                loadingMessage={(pharse) => `מחפש פרופיל המכיל את "${pharse.inputValue}"`}
                formatOptionLabel={({ value }) => <RelatedProfileOptionPreview option={value} />}
                isRtl={true}
                menuPlacement="auto"
                cacheOptions
            />
        </div>
    )
}


const customStyles = {
    control: () => ({
        display: 'flex',
        alignItems: 'center',
        border: 0,
        backgroundColor: 'transparent',
        margin: 0,
        padding: 0,
        minWidth: '15rem',
        minHeight: '0'
    }),

    indicatorSeparator: () => ({
        display: 'none'
    }),

    option: (provided: any, { isFocused }: any) => ({
        ...provided,
        backgroundColor: isFocused ? '#195da6' : 'transparent',
        color: isFocused ? '#fafafa' : '#222'
    }),

    noOptionsMessage: (provided: any) => ({
        ...provided,
        fontSize: '13px',
        padding: '2px'
    }),

    loadingMessage: (provided: any) => ({
        ...provided,
        fontSize: '13px',
        padding: '2px'
    }),
}



type ProfileOption = {
    label: string,
    value: {
        id: string,
        name: string
    }
}