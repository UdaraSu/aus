// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    // Handle successful registration
    const handleRegister = (user) => {
        alert(`User registered successfully: ${user.username}`);
        // Redirect to login page or home page after successful registration
        window.location.href = '/login';
    };

    return (
        <div className="register-page">
            <h1>Register a New Account</h1>
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
};

export default RegisterPage;
