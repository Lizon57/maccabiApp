import { useState } from "react"
import AsyncSelect from "react-select/async"

import { useDebounce } from "../../../../../hooks/use-debounce"

import { SingleValue } from "react-select"

import { entityItemService } from "../../../../../services/entities/entity-item-service"

import { RelatedProfileOptionPreview } from "./related-profile-option-preview"
import { RelatedProfileOptionPreviewAsync } from "./related-profile-option-preview-async"


export const RelatedProfilePicker = ({ tempItem, onSetStageData }: Props) => {
    const [isClicked, setIsClicked] = useState(false)


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
    // const debouncedGetOptions = useDebounce(getOptions, 700)
    const debouncedGetOptions = useDebounce(getOptions, 0)


    const loadOptions = (pharse: string) => {
        return new Promise<ProfileOption[]>((resolve) => {
            setTimeout(async () => {
                resolve(await debouncedGetOptions(pharse))
                // }, 700)
            }, 0)
        })
    }


    const setStageData = (option: SingleValue<ProfileOption>) => {
        if (!option?.value) return

        const { value } = option
        const data = {
            relatedInfo: {
                miniProfile: {
                    profileId: value.id,
                    name: value.name,
                    profileImageId: value.profileImageUrl
                },
                branchIds: value.branchIds
            }
        }
        onSetStageData(data)
    }


    return (
        <div className="entity-add-cmp--related-profile-picker__container" title="בחירת פרופיל">
            <span className="title">בחירת פרופיל</span>

            <div className="select-wrapper" onClick={() => setIsClicked(true)}>
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
                    onChange={(value) => setStageData(value)}
                    cacheOptions
                />

                {!isClicked && <RelatedProfileOptionPreviewAsync id={tempItem?.relatedInfo?.miniProfile?.profileId} />}
            </div>
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
    tempItem: any,
    onSetStageData: (data: Object) => void
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