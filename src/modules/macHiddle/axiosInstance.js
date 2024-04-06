// axiosInstance.js

import axios from 'axios';
// const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'https://server.machiddle.com/api/', // Your base URL
    // baseURL: 'http://192.168.1.133:8000/api/', // Your base URL
    // headers: {
    //     "Authorization": `Bearer ${token}`
    // }
});

export default axiosInstance;
