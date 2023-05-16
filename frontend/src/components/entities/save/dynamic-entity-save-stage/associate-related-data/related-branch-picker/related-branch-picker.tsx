import { useState, useEffect } from "react"
import Select from 'react-select'
import classNames from "classnames"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"
import { setSaveEntityItem } from "../../../../../../store/action/save-entity-item-action"
import { updateDisplayEntityItem } from "../../../../../../store/action/display-entity-item-action"

import { BRANCHES } from '../../../../../../data/app/supports-branches'

import { RelatedBranchOptionPreview } from "./related-branch-option-preview"


const OPTIONS = BRANCHES.map(branch => ({
    label: branch.name.display,
    value: {
        id: branch._id,
        name: branch.name.display,
        img: branch.asset.symbol
    }
}))


export const RelatedBranchPicker = ({ isRequire }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const [values, setValues] = useState<Option[]>([])
    const [isFail, setIsFail] = useState(false)


    useEffect(() => {
        if (!item?.relatedInfo?.branchIds) return

        const filteredOptions = OPTIONS.filter(option => item.relatedInfo?.branchIds.includes(option.value.id))

        setValues(filteredOptions)
        setIsFail(false)
    }, [item])


    const handleSelectChange = (values: any) => {
        const branchIds = values.map((value: Option) => value.value.id)
        const editedItem = structuredClone(item)
        if (!editedItem.relatedInfo) editedItem.relatedInfo = {}
        editedItem.relatedInfo.branchIds = branchIds
        setValues(values)
        setIsFail(false)
        setSaveEntityItem(editedItem)
        updateDisplayEntityItem(editedItem)
    }


    const onBlurInput = () => {
        if (!isRequire) return

        if (!item?.relatedInfo?.branchIds.length) setIsFail(true)
        else setIsFail(false)
    }


    return (
        <div className="entity-save-cmp--related-branch-picker__container">
            <div className={classNames('picker', { fail: isFail })} title="בחירת ענף">
                <span className="title">בחירת ענף</span>

                <Select
                    options={OPTIONS}
                    value={values}
                    className="react-select-cmp-container"
                    styles={customStyles}
                    placeholder="בחר ענף"
                    noOptionsMessage={(({ inputValue }) => `לא נמצא ענף המכיל את "${inputValue}"`)}
                    formatOptionLabel={({ value }) => <RelatedBranchOptionPreview option={value} />}
                    onChange={(value => handleSelectChange(value))}
                    defaultValue={values}
                    onBlur={onBlurInput}
                    isMulti
                />
            </div>

            {!!isFail && <div className="msg">חובה לשייך ענף</div>}
        </div>
    )
}


const customStyles = {
    control: () => ({
        display: 'flex',
        alignItems: 'center',
        minWidth: '15rem',
        minHeight: '0'
    }),

    indicatorSeparator: () => ({}),

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

    multiValueRemove: (provided: any) => ({
        ...provided,
        ':hover': {
            backgroundColor: '#195da6',
            color: '#ffff'
        }
    })
}


type Props = {
    isRequire: boolean
}


type Option = {
    label: string
    value: {
        id: string
        name: string
        img: string
    }
}