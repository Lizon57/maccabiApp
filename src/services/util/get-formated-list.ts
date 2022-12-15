export const getFormatedList = (list: string[], isDisjunction = false) => {
    const formatter = new Intl.ListFormat('he', { type: isDisjunction ? 'disjunction' : 'conjunction' })
    return formatter.format(list)
}