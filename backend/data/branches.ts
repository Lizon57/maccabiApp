import { Branch } from "../models/app/branches"


export const BRANCHES: Branch[] = [
    {
        id: 'branchId00001',
        name: {
            display: 'כדורגל'
        },
        teams: [
            {
                id: 'team00001',
                name: 'מכבי תל אביב (כדורגל)'
            },
            {
                id: 'team00002',
                name: 'מכבי שחר תל אביב'
            }
        ],
        mainTeamId: 'team00001'
    },

    {
        id: 'branchId00002',
        name: {
            display: 'כדורסל'
        },
        teams: [
            {
                id: 'team00003',
                name: 'מכבי תל אביב (כדורסל)'
            },
        ],
        mainTeamId: 'team00003'
    },

    {
        id: 'branchId00003',
        name: {
            display: 'כדורעף'
        },
        teams: [
            {
                id: 'team00004',
                name: 'מכבי תל אביב (כדורעף)'
            },
        ],
        mainTeamId: 'team00004'
    },

    {
        id: 'branchId00004',
        name: {
            display: 'כדוריד'
        },
        teams: [
            {
                id: 'team00005',
                name: 'מכבי תל אביב (כדוריד)'
            },
        ],
        mainTeamId: 'team00005'
    },
]