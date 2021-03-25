import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:9000"
    // baseURL: "http://node:9000",
    // baseURL: "http://3.15.172.225:9000" 
})

export default instance 