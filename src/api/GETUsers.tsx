import axios from "axios";

export const GETUsers = axios.create({
    baseURL: 'https://reqres.in/api'
});