import AsyncSelect from "react-select/async"

import { useDebounce } from "../../../../../hooks/use-debounce"

import { entityItemService } from "../../../../../services/entities/entity-item-service"

import { RelatedProfileOptionPreview } from "./related-profile-option-preview"


export const RelatedProfilePicker = ({ onSetTempData }: Props) => {
    const getOptions = async (pharse: string) => {
        try {
            const items = await entityItemService.getMiniProfilesByPharse(pharse)
            const options = items.map(item => ({
                label: item.name,
                value: {
                    id: item.id,
                    name: item.name,
                    branchIds: item.branchIds,
                    profileImageUrl: item.profileImageUrl
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
                className="react-select-cmp-container"
                styles={customStyles}
                placeholder="הקלד שם"
                noOptionsMessage={({ inputValue }) => inputValue.length
                    ? `לא נמצא פרופיל המכיל את "${inputValue}"`
                    : 'יש להקליד ביטוי לחיפוש'}
                loadingMessage={({ inputValue }) => `מחפש פרופיל המכיל את "${inputValue}"`}
                formatOptionLabel={({ value }) => <RelatedProfileOptionPreview option={value} />}
                isRtl={true}
                onChange={(value) => onSetTempData('profile', value)}
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


type Props = {
    onSetTempData: (type: string, payload: unknown) => void
}


type ProfileOption = {
    label: string,
    value: {
        id: string,
        name: string,
        branchIds: string[],
        profileImageUrl: string
    }
}