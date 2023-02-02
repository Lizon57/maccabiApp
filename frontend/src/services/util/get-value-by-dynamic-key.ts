export const getValueByDynamicKey = (key: string, item: Object) => {
    const keyPath = key.split('.')
    let actualValue: any = item

    for (let key of keyPath) {
        actualValue = actualValue[key as any]
    }

    return actualValue
}