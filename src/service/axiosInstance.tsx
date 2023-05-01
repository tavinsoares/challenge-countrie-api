import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export default instanceAxios