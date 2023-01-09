import axios from "axios";
const instance = axios.create({
    //we put the link of the deployed up with haroku
    baseURL: "http://localhost:9000"
})

export default instance;