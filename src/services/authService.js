import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const registerUser = async (username, password, role) => {
  const response = await axios.post(`${API_URL}/register`, { username, password, role });
  return response.data;
};
