export const splitByThree = (numbersStr) => {
    const num = +numbersStr
    return !isNaN(num) && num.toLocaleString()
}
