import axios from "axios"

const instance = axios.create({
    // baseURL: "http://localhost:9000" 
    // baseURL: "http://node:9000"
    baseURL: "http://a84424ebf3e764cdd8139c80f47a7913-703231666.us-east-2.elb.amazonaws.com:9000" 
    
})

export default instance 