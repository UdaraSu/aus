import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = ({ onTicketCreated }) => {
    const [ticket, setTicket] = useState({
        serialNumber: '',
        clientName: '',
        clientAddress: '',
        clientContactDetails: '',
        amount: '',
        assignedTo: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/tickets/create', ticket, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            onTicketCreated();
        } catch (error) {
            alert('Error creating ticket');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={ticket.serialNumber} onChange={(e) => setTicket({ ...ticket, serialNumber: e.target.value })} />
            <input value={ticket.clientName} onChange={(e) => setTicket({ ...ticket, clientName: e.target.value })} />
            <input value={ticket.clientAddress} onChange={(e) => setTicket({ ...ticket, clientAddress: e.target.value })} />
            <input value={ticket.clientContactDetails} onChange={(e) => setTicket({ ...ticket, clientContactDetails: e.target.value })} />
            <input value={ticket.amount} onChange={(e) => setTicket({ ...ticket, amount: e.target.value })} />
            <input value={ticket.assignedTo} onChange={(e) => setTicket({ ...ticket, assignedTo: e.target.value })} />
            <button type="submit">Create Ticket</button>
        </form>
    );
};

export default TicketForm;
