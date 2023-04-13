export const getFormattedNumber = (number: number) => {
    return new Intl.NumberFormat('he').format(number)
}