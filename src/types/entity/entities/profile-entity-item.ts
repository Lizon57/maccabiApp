import { BasicEntityItem } from "../basic-entity-item"

export type ProfileEntityItem = BasicEntityItem & _ProfileEntityItem


interface _ProfileEntityItem {
    relatedInfo: {
        profileImageId?: string
    },

    entityInfo: {
        name?: {
            he?: {
                private?: string,
                middle?: string,
                family?: string,
                nickname?: string
            }
        },

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
}