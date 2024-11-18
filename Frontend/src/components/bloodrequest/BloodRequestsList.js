import React, { useEffect, useState } from 'react';
import './BloodRequestsList.css';
const BloodRequestsList = () => {
  const [bloodRequests, setBloodRequests] = useState([]);

  useEffect(() => {
    const fetchBloodRequests = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blood-requests');
        const data = await response.json();
        setBloodRequests(data);
      } catch (error) {
        console.error('Error fetching blood requests:', error);
      }
    };
    fetchBloodRequests();
  }, []);

  return (
    <section className="blood-requests-list">
      <h2>Blood Requests</h2>
      {bloodRequests.length === 0 ? (
        <p>No blood requests found.</p>
      ) : (
        <ul>
          {bloodRequests.map((request) => (
            <li key={request._id}>
              <strong>Blood Group:</strong> {request.bloodGroup} <br />
              <strong>Quantity:</strong> {request.quantity} units <br />
              <strong>Location:</strong> {request.location} <br />
              <strong>Description:</strong> {request.description || 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BloodRequestsList;
