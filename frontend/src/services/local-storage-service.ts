const readFromStorage = (key: string) => {
    const value = localStorage.getItem(key)
    if (!value) return
    return JSON.parse(value)
}

const saveToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}


export const localStorageService = {
    readFromStorage,
    saveToStorage,
}