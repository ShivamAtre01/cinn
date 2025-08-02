import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Change if using a different backend URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
