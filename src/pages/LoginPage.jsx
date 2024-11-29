import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLoginSuccess }) => {
  const [error, setError] = useState(null);

  const handleLoginSuccess = (userData) => {
    onLoginSuccess(userData);
  };

  const handleLoginFailure = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
    </div>
  );
};

export default LoginPage;
