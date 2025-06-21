import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.onrender.com/api/v1',
    timeout: 10000,
    headers:{
        'content-type': 'application/json',
    } // 10 seconds timeout
});
export default axiosClient;