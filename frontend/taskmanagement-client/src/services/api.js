import axios from 'axios';

// Use your actual backend URL (the one from Swagger)
const API_BASE_URL = 'https://localhost:7157/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const userService = {
    getAll: () => api.get('/users'),
    getById: (id) => api.get(`/users/${id}`),
    register: (user) => api.post('/users/register', user),
    update: (id, user) => api.put(`/users/${id}`, user),
    delete: (id) => api.delete(`/users/${id}`),
};

export const taskService = {
    getAll: () => api.get('/tasks'),
    getById: (id) => api.get(`/tasks/${id}`),
    getByUser: (userId) => api.get(`/tasks/user/${userId}`),
    getPending: () => api.get('/tasks/pending'),
    create: (task) => api.post('/tasks', task),
    update: (id, task) => api.put(`/tasks/${id}`, task),
    delete: (id) => api.delete(`/tasks/${id}`),
};

export default api;