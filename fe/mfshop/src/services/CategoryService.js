import axios from "axios";
const BASE_URL = "http://localhost:8080";
const CategoryAPI = "/category";
export const listCategory = () => axios.get(`${BASE_URL}${CategoryAPI}`);