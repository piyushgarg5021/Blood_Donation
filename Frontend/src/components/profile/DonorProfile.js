// DonorProfile.js
import React, { useEffect, useState } from 'react';

const DonorProfile = () => {
  const email = window.location.pathname.split('/').pop();
  const [donorData, setDonorData] = useState({
    username: '',
    email: '',
    contact: '',
    blood_group: '',
    address: '',
    donation_history: [],
  });

  useEffect(() => {
    const fetchDonorData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/profile/' + email, {
          method: 'GET',
        });
        const data = await response.json();
        setDonorData(data);
      } catch (error) {
        console.error("Error fetching donor profile:", error);
      }
    };
    fetchDonorData();
  }, [email]);

  return (
    <div className="donor-profile">
      <h2>Donor Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {donorData.username}</p>
        <p><strong>Email:</strong> {donorData.email}</p>
        <p><strong>Contact:</strong> {donorData.contact}</p>
        <p><strong>Blood Group:</strong> {donorData.blood_group}</p>
        <p><strong>Address:</strong> {donorData.address}</p>
      </div>
      <h3>Donation History</h3>
      <ul>
        {donorData.donation_history.map((donation, index) => (
          <li key={index}>
            Date: {donation.date}, Details: {donation.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorProfile;
