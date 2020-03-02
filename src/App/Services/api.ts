import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

api.interceptors.response.use(
  response => {
    console.log(response);

    return response.data;
  },
  error => {
    switch (error.response.status) {
      case 401:
        return Promise.reject(new Error('Não autorizado'));
      case 400 || 422:
        return Promise.reject(new Error('Dados inválidos'));
      case 500:
        return Promise.reject(
          new Error('Erro no servidor, tente novamente mais tarde')
        );
      default:
        return Promise.reject(error);
    }
  }
);

export default api;
