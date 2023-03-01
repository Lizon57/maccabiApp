export const convertKebabCaseToCamelCase = (str: string) => {
    return str.replace(/(-[a-z])/, g => g.replace('-', '').toUpperCase())
}