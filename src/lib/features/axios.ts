import axiosClient from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axios = axiosClient.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type":"application/json"
  }
});

export default axios;
