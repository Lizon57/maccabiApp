import { MiniPageCategory } from "../../page-category"


export interface EntityItem {
    id: string,

    relatedInfo?: {
        profileImageId?: string,
        miniProfile?: {
            profileId: string,
            displayName: string,
            profileImageUrl?: string
        },
        branchIds: string[],
        miniPreviousOrganizations?:
        {
            name: string,
            id: string,
            imageUrl?: string
        }[]
    },

    entityInfo: {
        name: {
            display: string
            he?: {
                private?: string,
                middle?: string,
                family?: string,
                nickname?: string
            }
        },
        ctgIds: string[],
        miniCategories?: MiniPageCategory[],
        item?: {
            writers?: string[],
            publishers?: string[],
            pageCount?: number,
            publishYear?: number,
            isBiography?: boolean,

            dateOfActivity?: {
                isActive?: boolean,
                start?: {
                    day?: number,
                    month?: number,
                    year?: number
                },
                end?: {
                    day?: number,
                    month?: number,
                    year?: number
                }
            },

            activeGate?: number | string | number[] | string[]
        },
        imageUrl?: string,
        lifetime?: {
            born?: {
                date?: Date,

                uncomplete?: {
                    year?: number,
                    month?: number,
                    day?: number,
                }
            },

            died?: {
                date?: Date,

                uncomplete?: {
                    year?: number,
                    month?: number,
                    day?: number,
                }
            },

            bornLocation?: {
                city?: string,
                reguion?: string,
                country?: string
            }
        },
    },

    itemInfo: {
        view: number,
        rate: {
            avg: number,
            raterCount: number
        },
        editHistory: {
            total: number,
            lastEditDate: Date
        }
    }

    images?: string[],
    miniImages?: { id: string, name: string, imageUrl: string }[]
}