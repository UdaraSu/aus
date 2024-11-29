import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const fetchTickets = () => API.get('/tickets');
export const createTicket = (ticketData) => API.post('/tickets', ticketData);
