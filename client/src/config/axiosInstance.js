import axios from "axios";

export const API_SERVER_URL = import.meta.env.VITE_API_URL || "http://localhost:6600";
const BASE_URL = `${API_SERVER_URL}/api/`;

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;

export default axiosInstance;