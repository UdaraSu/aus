import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tickets';

// Create a new ticket
export const createTicket = async (ticketData) => {
    const response = await axios.post(`${API_URL}/create`, ticketData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
};

// Get tickets assigned to the user (Financial Planner or Mortgage Broker)
export const getTickets = async () => {
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
};
