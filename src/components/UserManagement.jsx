import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userService';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await getAllUsers();
                setUsers(userList);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User Management</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
