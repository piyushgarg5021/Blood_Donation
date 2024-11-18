import React, { useState } from 'react';
import './BloodRequest.css';
const BloodRequest = () => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    quantity: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blood-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Blood request posted successfully!');
        setFormData({ bloodGroup: '', quantity: '', location: '', description: '' });
      } else {
        alert(result.message || 'Failed to post blood request.');
      }
    } catch (error) {
      console.error('Error posting blood request:', error);
      alert('Error posting blood request.');
    }
  };

  return (
    <section className="blood-request">
      <div className="form-container">
        <h2>Post a Blood Request</h2>
        <form onSubmit={handleSubmit}>
          <label>Blood Group:</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label>Quantity (in units):</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Additional details (e.g., hospital name, urgency level)"
          />

          <button type="submit">Post Request</button>
        </form>
      </div>
    </section>
  );
};

export default BloodRequest;
