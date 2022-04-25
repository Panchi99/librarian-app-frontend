import axios from "axios";

const newInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default newInstance;