// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import './RegisterForm.css';  // Add appropriate CSS for styling

const RegisterForm = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Financial Planner');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Username and Password are required.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, role }),
            });

            if (response.ok) {
                const result = await response.json();
                onRegister(result.user); // Trigger parent callback on successful registration
                setUsername('');
                setPassword('');
                setRole('Financial Planner');
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred while registering.');
        }
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="Financial Planner">Financial Planner</option>
                        <option value="Mortgage Broker">Mortgage Broker</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
