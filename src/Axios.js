import axios from "axios"

const instance = axios.create({
    // baseURL: "http://localhost:9000" 
    // baseURL: "http://node:9000",
    baseURL: "http://a55e21a2183424346bd34da9921ff7ac-285514034.us-east-2.elb.amazonaws.com:9000" 
})

export default instance 