import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/register/donor" className="desktopMenuListItem">Register as Donor</Link>
        <Link to="/register/organization" className="desktopMenuListItem">Register as Organization</Link>
        <Link to="/login/donor" className="desktopMenuListItem">Login</Link>
        <Link to="/login/organization" className="desktopMenuListItem">Organization Login</Link>
        <Link to="/faq" className="desktopMenuListItem">FAQs</Link>
        <Link to="/blood-calculator" className="desktopMenuListItem">Blood Compatibility Calculator</Link>
        <Link to="/blood-request" className="desktopMenuListItem">Blood Request Feature</Link>
        <Link to="/blood-requests" className="desktopMenuListItem">Blood Request List</Link>
        <Link to="/about-us" className="desktopMenuListItem">About us</Link>
      </div>
    </nav>
  )
}

export default Navbar