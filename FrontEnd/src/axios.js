import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-media-app-zw9g.onrender.com'
});

export default instance;
