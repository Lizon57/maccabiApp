export const getMonthName = (month: number, isZeroIndex: boolean = true) => {
    const names = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']

    return names[isZeroIndex ? month : month - 1]
}