// axiosInstance.js

import axios from 'axios';
// const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'https://server.machiddle.com/', // Your base URL
    // headers: {
    //     "Authorization": `Bearer ${token}`
    // }
});

export default axiosInstance;
