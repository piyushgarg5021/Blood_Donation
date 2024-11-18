// src/components/OrganizationLogin.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizationLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/organizations/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        navigate('/dashboard');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section>
      <h2>Organization Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default OrganizationLogin;