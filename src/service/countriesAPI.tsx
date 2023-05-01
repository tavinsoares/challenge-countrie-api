import axiosInstance from './axiosInstance';

export const countriesAPI = {
    all: () => axiosInstance.get('/all').then((res) => {
        return res.data
    }),
    details: (countrie: string) => {
        return axiosInstance.get(`/name/${countrie}`).then(res => res.data)
    },
    region: (region: string) => {
       return axiosInstance.get(`/region/${region}`).then(res => res.data)
    }
}