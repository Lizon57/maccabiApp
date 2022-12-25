export const shouldDisplayValue = (value: any) => {
    switch (typeof value) {
        case 'function':
        case 'undefined':
            return false

        case 'boolean':
        case 'number':
        case 'string':
            return true

        case 'object':
            if (Array.isArray(value)) {
                if (value.length) return true
                return false
            } else if (Object.keys(value).length) return true
            return false

        default:
            return true

    }
}