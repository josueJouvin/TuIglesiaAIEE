import axios from "axios"

const apiRequest = axios.create({
    baseURL: import.meta.env.SERVER_URL,
    withCredentials: true
})

export default apiRequest