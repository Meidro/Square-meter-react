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

    async getBids() {
        return await (
            await instance.get(`/bids`)
        ).data
    },

    async addBids(newBids) {
        return await (
            await instance.post(`/bidnew`, newBids)
        ).data
    },

    async getFavsObj(ids) {
        return await (
            await instance.get(`/items?ids=${ids}`)
        ).data
    },
}
