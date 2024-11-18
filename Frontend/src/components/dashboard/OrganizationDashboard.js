// components/OrganizationDashboard.js
import React, { useEffect, useState } from 'react';
import './OrganizationDashboard.css';
import SearchDonor from '../searchdonor/searchdonor';
const OrganizationDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch donors and recent activity notifications from backend
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const notificationResponse = await fetch('http://localhost:5000/api/organizations/notifications');
        const notificationData = await notificationResponse.json();
        setNotifications(notificationData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    }
    fetchDashboardData();
  }, []);

  return (
    <div className="organization-dashboard">
      <h2>Organization Dashboard</h2>

      {/* Notifications Section */}
      <section className="notifications">
        <h3>Recent Donor Activity</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification.message}</li>
          ))}
        </ul>
      </section>

      <SearchDonor />
    </div>
  );
};

export default OrganizationDashboard;
