import axios from "axios";


const BASE_URL = 'http://localhost:3000/';


const apiInstance = axios.create({
    baseURL: BASE_URL,
});

export default apiInstance;