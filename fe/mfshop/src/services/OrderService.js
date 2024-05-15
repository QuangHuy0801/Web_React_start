import axios from "axios";
const BASE_URL = "http://localhost:8080";
const ORDERAPI = "/order";
export const listOrder = (user_id) => {
    return axios.get(`${BASE_URL}${ORDERAPI}`, {
        params: { user_id: user_id }
    });
};