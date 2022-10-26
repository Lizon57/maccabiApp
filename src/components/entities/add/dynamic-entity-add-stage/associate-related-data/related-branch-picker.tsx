import Select from 'react-select'
import { BRANCHES } from '../../../../../data/app/supports-branches'
import { RelatedBranchOptionPreview } from './related-branch-option-preview'


const OPTIONS = BRANCHES.map(branch => ({
    id: branch._id,
    name: branch.name.display,
    img: branch.asset.symbol
}))


export const RelatedBranchPicker = () => {
    return (
        <div className="entity-add-cmp--related-branch-picker__container">
            <span className="title">בחירת ענף</span>

            <Select
                options={OPTIONS.map(option => ({ label: option.name, value: option }))}
                className="react-select-cmp-container"
                styles={customStyles}
                placeholder="בחר ענף"
                noOptionsMessage={(({ inputValue }) => `לא נמצא ענף המכיל את "${inputValue}"`)}
                formatOptionLabel={({ value }) => <RelatedBranchOptionPreview option={value} />}
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