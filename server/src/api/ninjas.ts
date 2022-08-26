import axios, {AxiosRequestConfig} from 'axios';

const apiKey = process.env.API_KEY;

const config: AxiosRequestConfig = {
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: { 'X-Api-Key': apiKey}
}


export default axios.create(config);
