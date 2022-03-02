import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://jsproject.webcademy.ru',
})

export const API = {
    async getFilterParams() {
        return await (
            await instance.get('/itemsinfo')
        ).data
    },
    async getObjects(paramsString = '') {
        return await (
            await instance.get(`/items${paramsString}`)
        ).data
    },
}
