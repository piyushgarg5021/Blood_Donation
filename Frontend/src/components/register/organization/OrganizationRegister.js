import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for redirection
import './organizationRegister.css';

const OrganizationRegister = () => {
  const navigate = useNavigate(); // hook for navigation
  const [formData, setFormData] = useState({
    organization_name: '',
    email: '',
    password: '',
    contact_person: '',
    contact_number: '',
    registration_number: '',
    address: '',
    location: 'Jaipur',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contact_number') {
      // Only allow 10-digit numeric input
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/organizations/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      
      if (response.ok) {
        console.log(result.message);
        navigate('/login/organization'); // redirect to organization login page on success
      } else {
        console.error(result.message);
        alert(result.message || 'Error during registration');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="organization-register">
      <div className="form-container">
        <h2 className="form-title">Organization Signup</h2>
        <form onSubmit={handleSubmit} className="organization-register-form">
          <label>Organization Name:</label>
          <input
            type="text"
            name="organization_name"
            value={formData.organization_name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Contact Person:</label>
          <input
            type="text"
            name="contact_person"
            value={formData.contact_person}
            onChange={handleChange}
            required
          />

          <label>Contact Number:</label>
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            pattern="\d{10}"
            required
            placeholder="Enter 10-digit contact number"
            title="Contact number must be a 10-digit number"
          />

          <label>Registration Number:</label>
          <input
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={handleChange}
            required
          />

          <label>Location:</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-button">Register as Organization</button>
        </form>
      </div>
    </section>
  );
};

export default OrganizationRegister;
