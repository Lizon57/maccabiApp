import { useState, useEffect } from "react"
import Select, { PropsValue } from 'react-select'

import { BRANCHES } from '../../../../../data/app/supports-branches'

import { RelatedBranchOptionPreview } from './related-branch-option-preview'


const OPTIONS = BRANCHES.map(branch => ({
    label: branch.name.display,
    value: {
        id: branch._id,
        name: branch.name.display,
        img: branch.asset.symbol
    }
}))


export const RelatedBranchPicker = ({ profileRelatedBranchesIds, tempItem, onSetStageData }: Props) => {
    const [values, setValues] = useState<Option[]>([])


    useEffect(() => {
        const values = OPTIONS.filter(option => profileRelatedBranchesIds?.includes(option.value.id))
        setValues(values)
    }, [profileRelatedBranchesIds])


    const handleSelectChange = (values: any) => {
        const branchIds = values.map((value: Option) => value.value.id)
        const data = { relatedInfo: { branchIds } }

        console.log(values)
        onSetStageData(data)
        setValues(values)
    }


    useEffect(() => {
        if (values.length || !tempItem?.relatedInfo?.branchIds) return

        const branches = BRANCHES.filter(branch => tempItem?.relatedInfo?.branchIds.includes(branch._id))
        const defaultValues = branches.map(branch => ({
            label: branch.name.display,
            value: {
                id: branch._id,
                img: branch.asset.symbol,
                name: branch.name.display
            }
        }))
        setValues(defaultValues)
    }, [tempItem, values])


    return (
        <div className="entity-add-cmp--related-branch-picker__container" title="בחירת ענף">
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
                isMulti
            />
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
    profileRelatedBranchesIds?: string[],
    tempItem: any,
    onSetStageData: (data: Object) => void
}


type Option = {
    label: string,
    value: {
        id: string,
        name: string,
        img: string
    }
}