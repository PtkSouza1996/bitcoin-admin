import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default api;
