export const YEARS: (number | undefined)[] = [undefined]
for (let i = 1850; i <= new Date().getFullYear(); i++) {
    YEARS.push(i)
}