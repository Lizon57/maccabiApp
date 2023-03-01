export interface EntityFilterOption {
    id: string
    type: string
    param: string
    title: string

    activeFilterChipTexts: string[]

    option?: {
        isLengthProp?: boolean
        min?: number
        max?: number
    }
}