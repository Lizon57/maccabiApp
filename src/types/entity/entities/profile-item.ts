import { EntityItem } from "../entity-item"

export type ProfileEntityItem = _ProfileEntityItem & EntityItem


type _ProfileEntityItem = {
    entityInfo: {
        name: {
            private?: string,
            middle?: string,
            family?: string,
            nickname?: string
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