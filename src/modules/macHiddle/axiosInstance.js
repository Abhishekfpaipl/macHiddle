// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.133:8000/api/', // Your base URL
});

export default axiosInstance;
