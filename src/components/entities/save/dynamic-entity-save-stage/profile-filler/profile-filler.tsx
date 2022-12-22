import { BinaryPicker } from "./pickers/binary-picker"
import { NumberPicker } from "./pickers/number-picker"
import { SymbolSeperateList } from "./pickers/symbol-seperate-list"

export const ProfileFiller = ({ infos }: Props) => {
    const getPickerCmp = (info: Info) => {
        switch (info.type) {
            case 'number-picker':
                return <NumberPicker key={info.key} pickerInfo={info} />

            case 'binary-picker':
                return <BinaryPicker key={info.key} pickerInfo={info} />

            case 'symobl-seperate-list':
                return <SymbolSeperateList key={info.key} pickerInfo={info} />

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
    type: string,
    title: string
    key: string,
    isRequire: boolean,

    option?: {
        delimiter?: string,
        min?: number,
        max?: number
    }
}


type Props = {
    infos: Info[],
}