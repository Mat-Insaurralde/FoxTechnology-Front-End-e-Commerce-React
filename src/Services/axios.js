import axios  from 'axios';


const instance = axios.create({
    baseURL: 'https://e-commerce-nodejs-2-4qw3.onrender.com/api',
    withCredentials: true

})

export default instance;