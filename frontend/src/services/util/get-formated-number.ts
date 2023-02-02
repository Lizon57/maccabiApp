export const getFormatedNumber = (number: number) => {
    return new Intl.NumberFormat('he').format(number)
}