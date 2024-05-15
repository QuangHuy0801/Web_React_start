import axios from "axios";
const BASE_URL = "http://localhost:8080";
const CARTOFUSER = "/cartofuser";
export const cartOfUser = (user) => {
    return axios.get(`${BASE_URL}${CARTOFUSER}`, {
        params: { user: user }
    });
};