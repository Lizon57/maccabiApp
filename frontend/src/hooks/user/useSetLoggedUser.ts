import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { login, logout } from '../../store/action/user-action'
import { RootState } from '../../store/store'

import { userService } from '../../services/user/user-service'


export const useSetLoggedUser = () => {
    const { user } = useSelector((state: RootState) => state.userStateModule)

    useEffect(() => {
        const loggedUser = userService.getLoggedinUser()
        if (user._id && loggedUser) login(loggedUser)
        else logout()
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps
}