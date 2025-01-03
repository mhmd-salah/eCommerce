import axios from "axios";

const baseURL = new URL("http://localhost:3000");

const axiosInstance = axios.create({
  baseURL: baseURL.toString(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;