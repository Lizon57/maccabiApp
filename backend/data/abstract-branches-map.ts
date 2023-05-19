import { AbstractBranch } from "../models/app/abstract-branch"


export const ABSTRACT_BRANCHES_MAP: { [key: string]: AbstractBranch } = {
    football: {
        relatedInfo: {
            extendBranchId: '',

            mainTeamId: '',
            miniTeams: [
                {
                    id: '',
                    displayName: '',
                    icon: ''
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
            extendBranchId: '',

            mainTeamId: '',
            miniTeams: [
                {
                    id: '',
                    displayName: '',
                    icon: ''
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
            extendBranchId: '',

            mainTeamId: '',
            miniTeams: [
                {
                    id: '',
                    displayName: '',
                    icon: ''
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
            extendBranchId: '',

            mainTeamId: '',
            miniTeams: [
                {
                    id: '',
                    displayName: '',
                    icon: ''
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