import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { login } from '../../store/action/user-action'
import { RootState } from '../../store/store'

import { userService } from '../../services/user/user-service'


export const useSetLoggedUser = () => {
    const { user } = useSelector((state: RootState) => state.userStateModule)

    useEffect(() => {
        const loggedUser = userService.getLoggedinUser()
        if (user._id && loggedUser) login(loggedUser)
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps
}