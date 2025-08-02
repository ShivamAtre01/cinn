import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance'; // adjust path if needed

export default function Register() {
  const [data, setData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/register/', data);
      alert('Registered successfully');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={e => setData({ ...data, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setData({ ...data, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
}
