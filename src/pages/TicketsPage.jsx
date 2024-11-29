import React, { useEffect, useState } from 'react';
import { getTickets } from '../services/ticketService';

const TicketsPage = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const ticketList = await getTickets();
                setTickets(ticketList);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTickets();
    }, []);

    return (
        <div>
            <h1>Tickets</h1>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.client_name} - {ticket.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketsPage;
