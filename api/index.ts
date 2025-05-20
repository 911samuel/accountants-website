import axios from "axios"

const BASE_URL = 'https://api.accountants.co.rw';

export const requestAxios = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
})


