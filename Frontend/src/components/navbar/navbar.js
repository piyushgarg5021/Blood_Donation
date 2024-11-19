// import React from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="desktopMenu">
//         <Link to="/" className="desktopMenuListItem">Home</Link>
//         <Link to="/register/donor" className="desktopMenuListItem">Register as Donor</Link>
//         <Link to="/register/organization" className="desktopMenuListItem">Register as Organization</Link>
//         <Link to="/login/donor" className="desktopMenuListItem">Donor Login</Link>
//         <Link to="/login/organization" className="desktopMenuListItem">Organization Login</Link>
//         <Link to="/faq" className="desktopMenuListItem">FAQs</Link>
//         <Link to="/blood-calculator" className="desktopMenuListItem">Blood Compatibility Calculator</Link>
//         <Link to="/blood-request" className="desktopMenuListItem">Blood Request Feature</Link>
//         <Link to="/blood-requests" className="desktopMenuListItem">Blood Request List</Link>
//         <Link to="/about-us" className="desktopMenuListItem">About us</Link>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      
      
      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/register/donor" className="desktopMenuListItem">Register as Donor</Link>
        <Link to="/register/organization" className="desktopMenuListItem">Register as Organization</Link>
        <Link to="/login/donor" className="desktopMenuListItem">Donor Login</Link>
        <Link to="/login/organization" className="desktopMenuListItem">Organization Login</Link>
        <Link to="/faq" className="desktopMenuListItem">FAQs</Link>
        <Link to="/blood-calculator" className="desktopMenuListItem">Blood Calculator</Link>
        <Link to="/blood-request" className="desktopMenuListItem">Blood Request</Link>
        <Link to="/about-us" className="desktopMenuListItem">About Us</Link>
      </div>

    
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {menuOpen && (
        <div className="mobileMenu">
          <Link to="/" className="mobileMenuListItem" onClick={toggleMenu}>Home</Link>
          <Link to="/register/donor" className="mobileMenuListItem" onClick={toggleMenu}>Register as Donor</Link>
          <Link to="/register/organization" className="mobileMenuListItem" onClick={toggleMenu}>Register as Organization</Link>
          <Link to="/login/donor" className="mobileMenuListItem" onClick={toggleMenu}>Donor Login</Link>
          <Link to="/login/organization" className="mobileMenuListItem" onClick={toggleMenu}>Organization Login</Link>
          <Link to="/faq" className="mobileMenuListItem" onClick={toggleMenu}>FAQs</Link>
          <Link to="/blood-calculator" className="mobileMenuListItem" onClick={toggleMenu}>Blood Calculator</Link>
          <Link to="/blood-request" className="mobileMenuListItem" onClick={toggleMenu}>Blood Request</Link>
          <Link to="/about-us" className="mobileMenuListItem" onClick={toggleMenu}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
