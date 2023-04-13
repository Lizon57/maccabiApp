export const getValueByDynamicKey = (key: string, item: Object) => {
    const keyPath = key.split('.')
    let actualValue: any = item

    for (let key of keyPath) {
        if (!actualValue) return undefined
        actualValue = actualValue[key as any]
    }


    return actualValue
}