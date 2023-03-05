export type FixedLengthArray<T, N extends number, R extends readonly T[] = [],> = R['length'] extends N ? R : FixedLengthArray<T, N, readonly [T, ...R]>