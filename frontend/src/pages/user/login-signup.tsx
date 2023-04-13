import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGoogleLogin } from '@react-oauth/google'
import { BiUserCheck } from "react-icons/bi"
import { BsGoogle } from "react-icons/bs"
import { AiFillEye, AiFillEyeInvisible, AiOutlineUserAdd } from "react-icons/ai"
import signupLoginImage from "../../assets/images/app-layout/signup-login.jpg"

import { login } from "../../store/action/user-action"
import { insertAppMessage } from "../../store/action/app-state-action"

import { User } from "../../models/interfaces/user/user"

import { userService } from "../../services/user/user-service"

import { MainTitle } from "../../components/common/main-title/main-title"
import { TextToggler } from "../../components/common/text-toggler/text-toggler"


const LoginSignup = () => {
    const [isSignupPage, setIsSignupPage] = useState(false)
    const [isRevealPassword, setIsRevealPassword] = useState(false)
    const [credential, setCredential] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const onToggleIsSignupPage = () => setIsSignupPage(!isSignupPage)

    const handleInputChange = (name: string, value: string) => {
        setCredential(prevState => ({ ...prevState, [name]: value }))
    }


    const onGoogleAuthSuccess = async (tokenCode: string) => {
        try {
            const user = await userService.googleSignupLogin(tokenCode)
            onLoginSuccess(user)
        } catch (err) {
            setError('תקלה זמנית בחיבור לחשבון, אנא נסה שנית')
        }
    }

    const onGoogleLogin = useGoogleLogin({
        onSuccess: ({ code }) => onGoogleAuthSuccess(code),
        flow: 'auth-code',
    })


    const onSubmitForm = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const { email, password } = credential
        if (!email || !password) return

        onSignupLogin(credential)
    }


    const onSignupLogin = async (credential: Credential) => {
        try {
            const user: User = isSignupPage ? await userService.signup(credential) : await userService.login(credential)
            if (user._id) onLoginSuccess(user)
        } catch ({ message }) {
            setError(message as string)
        }
    }


    const onLoginSuccess = (user: User) => {
        login(user)
        navigate('/')
        if (isSignupPage) insertAppMessage({ text: 'נרשמת בהצלחה!', title: 'ברוך הבא לאתר!', type: 'success' })
        else insertAppMessage({ text: 'התחברת בהצלחה!', title: 'ברוך הבא לאתר!', type: 'success' })
    }


    return (
        <main className="user-pages--login-signup__container">
            <div className="layout">
                <img src={signupLoginImage} alt={isSignupPage ? 'הצטרף למכביפדיה!' : 'התחבר למשתמש!'} />

                <div className="content-container">
                    <TextToggler options={['התחבר', 'הירשם']} onToggleCallBack={onToggleIsSignupPage} />

                    <MainTitle
                        text={isSignupPage ? 'הירשם למכביפדיה' : 'ברוך השב למכביפדיה!'}
                        Icon={isSignupPage ? AiOutlineUserAdd : BiUserCheck}
                    />

                    <form className="form-container" onSubmit={onSubmitForm}>
                        <div className="field">
                            <label>דואר אלקטרוני</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="דואר אלקטרוני"
                                value={credential.email}
                                className={credential.email ? 'pristine' : ''}
                                onChange={({ currentTarget: { name, value } }) => handleInputChange(name, value)}
                            />
                        </div>
                        <div className="field">
                            <label>סיסמה</label>
                            <input
                                type={isRevealPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="סיסמה"
                                className={credential.password ? 'pristine' : ''}
                                value={credential.password}
                                onChange={({ currentTarget: { name, value } }) => handleInputChange(name, value)}
                            />
                            {credential.password && <span className="show-password-icon" onClick={() => setIsRevealPassword(!isRevealPassword)}>
                                {isRevealPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>}
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button className="form-login-button">{isSignupPage ? 'הירשם' : 'התחבר'}</button>
                    </form>

                    <span className="divider"></span>

                    <button className="google-login-button" onClick={() => onGoogleLogin()}>
                        {isSignupPage ? 'הירשם' : 'התחבר'} באמצעות <BsGoogle />
                    </button>
                </div>
            </div>
        </main >
    )
}

export default LoginSignup


type Credential = {
    email: string
    password: string
}