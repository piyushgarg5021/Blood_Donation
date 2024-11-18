import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './donorRegister.css';

const DonorRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contact: '',
    blood_group: '',
    age: '',
    address: '',
    location: 'Jaipur',
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contact') {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donor Data Submitted:', formData);

    const handleSignup = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result.message);

        if (result.message === 'Signup successful') {
          alert('Registration successful! Redirecting to login...');
          navigate('/login/donor'); // Redirect to login page
        } else {
          alert(result.message); // Show any error messages from the server
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
      }
    };

    handleSignup();
  };

  return (
    <section className="donor-register">
      <div className="form-container">
        <h2 className="form-title">Donor Signup</h2>
        <form onSubmit={handleSubmit} className="donor-register-form">
          <label>Name:</label>
          <input type="text" name="name" value={formData.username} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            pattern="\d{10}"
            required
            placeholder="Enter 10-digit contact number"
            title="Contact must be a 10-digit number"
          />

          <label>Blood Group:</label>
          <select name="blood_group" value={formData.blood_group} onChange={handleChange} required>
            <option value="" disabled>Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />

          <label>Location:</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />

          <button type="submit" className="register-button">Register as Donor</button>
        </form>
      </div>
    </section>
  );
};

export default DonorRegister;
