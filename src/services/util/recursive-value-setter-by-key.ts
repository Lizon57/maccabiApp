export const recursiveValueSetterByKey = <T>(value: T, obj: { [key: string]: any }, key: string) => {
    const keyPath = key.split('.')
    if (keyPath.length === 1) {
        obj[keyPath[0]] = value
        return
    }

    if (!obj[keyPath[0]]) return

    const actualObj = obj[keyPath[0]]
    keyPath.shift()

    recursiveValueSetterByKey(value, actualObj, keyPath.join('.'))
}