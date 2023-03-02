export type EntityItemRate = {
    avg?: number
    raterCount: number
    rateMap: {
        [key: string]: 1 | 2 | 3 | 4 | 5
    }
}