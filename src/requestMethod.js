import axios from "axios";
import { getUserToken} from './helpers/auth'

const BASE_URL = "https://auto-mart-car-app.herokuapp.com/api/";
const TOKEN = getUserToken();
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    // headers: { token: `Bearer ${TOKEN}` },
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
});
export const userRequestForm = axios.create({
    baseURL: BASE_URL,
    // headers: { token: `Bearer ${TOKEN}` },
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        "Content-Type": "multipart/form-data",
    },
});