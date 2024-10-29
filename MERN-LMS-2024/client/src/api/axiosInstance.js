import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }else {
      console.log("No access token found in sessionStorage");
    }

    return config;
  },
  (err) => Promise.reject(err,"err yha h")
 
);

export default axiosInstance;
