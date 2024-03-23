// axiosInstance.js

import axios from 'axios';
// const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.133:8000/api/', // Your base URL
    // headers: {
    //     "Authorization": `Bearer ${token}`
    // }
});

export default axiosInstance;
