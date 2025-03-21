import axios from 'axios';
import authHeader from '../utils/authHeader';

const API_URL = window.location.href.includes('http://localhost:3000/') ?
  'http://localhost:5000/flashnotes-d3933/us-central1/api/' :
  'https://us-central1-flashnotes-d3933.cloudfunctions.net/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api = {
  get: (url) => axiosInstance.get(url).then((res) => res.data).catch(err => { console.log(err.response); throw err.response.data }),
  post: (url, data) => axiosInstance.post(url, data).then((res) => res.data).catch(err => { console.log(err.response); throw err.response.data }),
  put: (url, data) => axiosInstance.put(url, data).then((res) => res.data).catch(err => { console.log(err.response); throw err.response.data }),
  delete: (url) => axiosInstance.delete(url).then((res) => res.data).catch(err => { console.log(err.response); throw err.response.data }),
};

export default api;
