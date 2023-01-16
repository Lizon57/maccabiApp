import { useState, useEffect } from "react"
import { useDebouncedCallback } from "use-debounce"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"
import { setSaveEntityItem } from "../../../../../../store/action/save-entity-item-action"

import AsyncSelect from "react-select/async"
import { SingleValue } from "react-select"

import { entityItemService } from "../../../../../../services/entities/entity-item-service"

import { RelatedProfileOptionPreview } from "./related-profile-option-preview"
import { FaTimes } from "react-icons/fa"


export const RelatedProfilePicker = ({ isRequire }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const [value, setValue] = useState<SingleValue<ProfileOption>>()
    const [isClearable, setIsClearable] = useState<boolean>(false)
    const [isFail, setIsFail] = useState(false)


    useEffect(() => {
        if (item.relatedInfo?.miniProfile) {
            const { relatedInfo: { miniProfile, branchIds } } = item

            const value = {
                label: miniProfile?.displayName || '',
                value: {
                    id: miniProfile?.profileId || '',
                    name: miniProfile?.displayName || '',
                    branchIds: branchIds || [],
                    profileImageUrl: miniProfile?.profileImageUrl || ''
                }
            }
            setValue(value)
            setIsClearable(true)
        }
    }, [item])


    const getOptions = async (pharse: string) => {
        try {
            const items = await entityItemService.getMiniProfilesByPharse(pharse)
            const options = items.map(({ name, id, branchIds, profileImageUrl }) => ({
                label: name,
                value: { id, name, branchIds, profileImageUrl }
            }))
            return options as ProfileOption[]
        } catch (err) {
            console.log(err)
            return [] as ProfileOption[]
        }
    }
    // const debouncedGetOptions = useDebounce(getOptions, 700)
    const debouncedGetOptions = useDebouncedCallback(getOptions, 0)

    const loadOptions = (pharse: string) => {
        return new Promise<ProfileOption[]>((resolve) => {
            setTimeout(async () => {
                const options = await debouncedGetOptions(pharse)
                if (options) resolve(options)
                // }, 700)
            }, 0)
        })
    }


    const setProfile = (option: SingleValue<ProfileOption>) => {
        const editedItem = structuredClone(item)
        if (!editedItem.relatedInfo) editedItem.relatedInfo = {}

        editedItem.relatedInfo.miniProfile = {
            profileId: option?.value.id,
            displayName: option?.value.name,
            profileImageUrl: option?.value.profileImageUrl
        }
        editedItem.entityInfo.name.display = option?.value.name
        editedItem.relatedInfo.branchIds = option?.value.branchIds
        setValue(editedItem.relatedInfo)
        setIsClearable(true)
        setSaveEntityItem(editedItem)
        setIsFail(false)
    }


    const onBlurInput = () => {
        if (!isRequire) return

        if (!item?.relatedInfo?.miniProfile?.profileId) setIsFail(true)
        else setIsFail(false)
    }

    const onClearValue = () => {
        const editedItem = structuredClone(item)
        editedItem.relatedInfo.miniProfile = {}

        setSaveEntityItem(editedItem)
        setValue(null)
        setIsClearable(false)
    }



    return (
        <div className="entity-save-cmp--related-profile-picker__container">
            <div className={"picker" + (isFail ? ' fail' : '')} title="בחירת פרופיל">
                <span className="title">בחירת פרופיל</span>

                <div className="select-wrapper">
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
                        isRtl
                        onChange={(value) => setProfile(value)}
                        onBlur={onBlurInput}
                        value={value}
                        cacheOptions
                    />

                    {isClearable && <span className="clear-icon" onClick={onClearValue}><FaTimes /></span>}
                </div>
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
    isRequire: boolean
}


type ProfileOption = {
    label: string
    value: {
        id: string
        name: string
        branchIds: string[]
        profileImageUrl: string
    }
}