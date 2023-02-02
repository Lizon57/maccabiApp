export type EntityFilterOption = {
    id: string
    type: string
    key: string
    param: string
    title: string

    activeFilterChip: {
        type: string
        text: string
    }

    option?: {
        isLengthProp?: boolean
        min?: number
        max?: number
    }
}