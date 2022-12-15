export const getValueByDynamicKey = (key: string, item: Object) => {
    const KEY_PATH = key.split('.')
    let actualValue: any = item

    for (let key of KEY_PATH) {
        actualValue = actualValue[key as any]
    }

    return actualValue
}