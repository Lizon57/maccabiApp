export const getMostViewedItems = <T>(items: { [viewKey: number]: T }[], viewKey: string, amount: number = 5) => {
    const viewKeyPaths = viewKey.split('.')
    items = items.slice()

    const getViewKeyValue = (item: { [viewKey: number]: T }) => {
        let itemPart: any = item

        for (let key of viewKeyPaths) {
            itemPart = itemPart[key as any]
        }

        return itemPart
    }

    items.sort((a, b) => getViewKeyValue(b) - getViewKeyValue(a))

    return items.slice(0, amount)
}