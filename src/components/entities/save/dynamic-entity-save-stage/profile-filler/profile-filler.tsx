import { BinaryPicker } from "./pickers/binary-picker"
import { DatePicker } from "./pickers/date-picker"
import { NumberPicker } from "./pickers/number-picker"
import { SymbolSeperateList } from "./pickers/symbol-seperate-list"

export const ProfileFiller = ({ infos }: Props) => {
    const getPickerCmp = (info: Info) => {
        const basicProps = { key: info.key, pickerInfo: info }

        switch (info.type) {
            case 'number-picker':
                return <NumberPicker {...basicProps} />

            case 'binary-picker':
                return <BinaryPicker {...basicProps} />

            case 'date-picker':
                return <DatePicker {...basicProps} />

            case 'symobl-seperate-list':
                return <SymbolSeperateList {...basicProps} />

            default: return null
        }
    }

    return (
        <div className="entity-save-cmp--profile-filler__container">
            {infos.map(getPickerCmp)}
        </div>
    )
}


type Info = {
    type: string
    title: string
    key: string
    isRequire: boolean

    option?: {
        delimiter?: string
        min?: number
        max?: number
    }
}


type Props = {
    infos: Info[]
}