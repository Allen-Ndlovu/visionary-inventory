import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getList = (resource) => api.get(`/${resource}`).then(res => res.data);
export const getItem = (resource, id) => api.get(`/${resource}/${id}`).then(res => res.data);
export const createItem = (resource, payload) => api.post(`/${resource}`, payload).then(res => res.data);

export default api;
