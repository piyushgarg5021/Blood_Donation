import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">BloodConnect</Link>

      <div className="menu">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/register/donor" className={location.pathname === '/register/donor' ? 'active' : ''}>Register as Donor</Link>
        <Link to="/register/organization" className={location.pathname === '/register/organization' ? 'active' : ''}>Register as Organization</Link>
        <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQs</Link>
        <Link to="/blood-calculator" className={location.pathname === '/blood-calculator' ? 'active' : ''}>Blood Calculator</Link>
        <Link to="/blood-request" className={location.pathname === '/blood-request' ? 'active' : ''}>Blood Request</Link>
        <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About Us</Link>
        <button className="btn">Login</button>
      </div>

      {/* Mobile Menu */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobileMenu">
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/register/donor" onClick={toggleMobileMenu}>Register as Donor</Link>
          <Link to="/register/organization" onClick={toggleMobileMenu}>Register as Organization</Link>
          <Link to="/faq" onClick={toggleMobileMenu}>FAQs</Link>
          <Link to="/blood-calculator" onClick={toggleMobileMenu}>Blood Calculator</Link>
          <Link to="/blood-request" onClick={toggleMobileMenu}>Blood Request</Link>
          <Link to="/about-us" onClick={toggleMobileMenu}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
