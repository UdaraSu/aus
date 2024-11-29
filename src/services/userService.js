import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Get all users (Admin)
export const getAllUsers = async () => {
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
};
