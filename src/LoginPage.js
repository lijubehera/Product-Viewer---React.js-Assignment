import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from './api'; // NOT '../services/api'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const res = await loginUser({ username, password });
    console.log('Login response:', res.data); // Debug print
    localStorage.setItem('token', res.data.token);
    navigate('/products');
  } catch (err) {
    console.error('Login error:', err.response?.data || err.message);
    setError('Invalid credentials');
  }
};



  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ margin: '10px', padding: '8px', width: '200px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ margin: '10px', padding: '8px', width: '200px' }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
      >
        Login
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
