import { useState, useEffect } from "react"

import AsyncSelect from "react-select/async"
import { SingleValue } from "react-select"

import { updateItem } from "../../../../../../store/slicer/entity-save-slicer"
import { useStoreDispatch } from "../../../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { useDebounce } from "../../../../../../hooks/use-debounce"

import { entityItemService } from "../../../../../../services/entities/entity-item-service"

import { RelatedProfileOptionPreview } from "./related-profile-option-preview"


export const RelatedProfilePicker = ({ isRequire }: Props) => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const [value, setValue] = useState<SingleValue<ProfileOption>>()
    const [isFail, setIsFail] = useState(false)


    useEffect(() => {
        if (item.relatedInfo?.miniProfile) {
            const value = {
                label: item.relatedInfo.miniProfile.displayName || '',
                value: {
                    id: item.relatedInfo?.miniProfile?.profileId || '',
                    name: item.relatedInfo.miniProfile.displayName || '',
                    branchIds: item.relatedInfo.branchIds || [],
                    profileImageUrl: item.relatedInfo.miniProfile.profileImageUrl || ''
                }
            }
            setValue(value)
        }
    }, [item])


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
        dispatch(updateItem(editedItem))
        setIsFail(false)
    }


    const onBlurInput = () => {
        if (!isRequire) return

        if (!item?.relatedInfo?.miniProfile?.profileId) setIsFail(true)
        else setIsFail(false)
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
                        isRtl={true}
                        onChange={(value) => setProfile(value)}
                        onBlur={onBlurInput}
                        value={value}
                        cacheOptions
                    />
                </div>
            </div>

            {!!isFail && <div className="msg">חובה לשייך פרופיל</div>}
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
    label: string,
    value: {
        id: string,
        name: string,
        branchIds: string[],
        profileImageUrl: string
    }
}