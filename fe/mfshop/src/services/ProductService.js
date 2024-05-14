import axios from "axios";
const BASE_URL = "http://localhost:8080";
const newProductAPI = "/newproduct";
export const listnewProduct = () => axios.get(`${BASE_URL}${newProductAPI}`);
const blProductAPI = "/bestsellers";
export const listbsProduct = () => axios.get(`${BASE_URL}${blProductAPI}`);
const ProductAPI = "/product";
export const listProduct = () => axios.get(`${BASE_URL}${ProductAPI}`);
const SearchAPI = "/Search";
export const listProductSearch = (searchContent) => {
    const url = `${BASE_URL}${SearchAPI}?searchContent=${searchContent}`;
    return axios.get(url);
};