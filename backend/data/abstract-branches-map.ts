import { AbstractBranch } from "../models/app/abstract-branch"


export const ABSTRACT_BRANCHES_MAP: { [key: string]: AbstractBranch } = {
    football: {
        relatedInfo: {
            extendBranchId: '6467f12006a31ca1d4a809f7',

            mainTeamId: '647b9b29ad83f2653859c5c8',
            miniTeams: [
                {
                    id: '647b9b29ad83f2653859c5c8',
                    displayName: 'מכבי תל אביב',
                    symbol: ''
                }
            ]
        },

        entityInfo: {
            name: {
                display: 'כדורגל'
            }
        }
    },

    basketball: {
        relatedInfo: {
            extendBranchId: '6467f15406a31ca1d4a84402',

            mainTeamId: '647ced9737419f673e5d613d',
            miniTeams: [
                {
                    id: '647ced9737419f673e5d613d',
                    displayName: 'מכבי תל אביב',
                    symbol: ''
                }
            ]
        },

        entityInfo: {
            name: {
                display: 'כדורסל'
            }
        }
    },

    volleyball: {
        relatedInfo: {
            extendBranchId: '6467f18906a31ca1d4a88005',

            mainTeamId: '647cee9837419f673e5d6146',
            miniTeams: [
                {
                    id: '',
                    displayName: '',
                    symbol: ''
                }
            ]
        },

        entityInfo: {
            name: {
                display: 'כדורעף'
            }
        }
    },

    handball: {
        relatedInfo: {
            extendBranchId: '6467f26506a31ca1d4a979ca',

            mainTeamId: '647ceee637419f673e5d614b',
            miniTeams: [
                {
                    id: '647ceee637419f673e5d614b',
                    displayName: 'מכבי תל אביב',
                    symbol: ''
                }
            ]
        },

        entityInfo: {
            name: {
                display: 'כדוריד'
            }
        }
    }
}