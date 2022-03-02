export const getParamsString = (data) => {
    if (data) {
        let paramsString = '?'

        for (let key in data) {
            if (data[key] !== 'all' && data[key] && data[key].length && data[key] !== '') {
                paramsString += `${key}=${data[key]}&`
            }
        }
        return paramsString
    }
    return ''
}
