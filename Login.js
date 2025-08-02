import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/token/', credentials);
      localStorage.setItem('access', res.data.access);
      alert('Login successful');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}
