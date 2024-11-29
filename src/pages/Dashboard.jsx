import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            {/* Render additional components like tickets or user info */}
        </div>
    );
};

export default Dashboard;
