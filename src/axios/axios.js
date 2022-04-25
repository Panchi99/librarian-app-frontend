import axios from "axios";

const newInstance = axios.create({
    baseURL: "https://librarian-book-app.herokuapp.com/api",
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default newInstance;