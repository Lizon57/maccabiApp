import axios from "axios"


const getErrorMessage = (error: string) => {
    switch (error) {
        case 'Invalid email': return 'לא נמצא משתמש עם כתובת המייל שסופקה'
        case 'Google user': return 'זיהוי משתמש זה באמצעות גוגל בלבד'
        case 'Invalid password': return 'הסיסמה שגויה'
        case 'Failed to login with google': return 'לא הצלחנו לחבר אותך לחשבון גוגל'
        case 'Email already taken': return 'דואר אלקטרוני בשימוש בידי משתמש אחר'
        case 'Failed to logout': return 'לא הצלחנו לנתק אותך מהשרת'
        case 'Failed to get entity items':
        case 'Failed to get entity item': return 'לא הצלחנו לבצע את השאילתא המבוקשת'
        case 'Request failed with status code 404': return 'העמוד המבוקש לא נמצא'
        default: return 'אנו חווים קשיים בשרת. אנא נסה שנית מאוחר יותר'
    }
}

export const errorHandler = (error: unknown, shouldThrowBack: boolean) => {
    const message = axios.isAxiosError(error)
        ? getErrorMessage(error?.response?.data.err || '')
        : getErrorMessage(error as string || '')

    if (shouldThrowBack) throw new Error(message)
    else return message
}