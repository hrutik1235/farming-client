// axiosConfig.js
import axios from "axios";

// Create axios instance - remove baseURL or set it correctly
const axiosInstance = axios.create({
  baseURL: "/api", // This will work now
});
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      config.headers["user_id"] = userId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user_id");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
