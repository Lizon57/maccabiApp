import { User } from "../../models/interfaces/user/user"
import { makeId } from "../../services/util/make-id"


export const USER_DB: User[] = [
    {
        _id: makeId(),

        credential: {
            email: 'orenyaniv90@gmail.com',
            password: '123456'
        },

        client: {
            name: {
                first: 'אורן',
                last: 'יניב',
                display: 'אורן המתפץ.'
            }
        },

        browseableBranchesIds: ['branchId00001', 'branchId00002', 'branchId00003']
    }
]