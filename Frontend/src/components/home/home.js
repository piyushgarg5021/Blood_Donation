// import React from 'react';
// import { Link } from 'react-scroll';
// import './home.css';

// const Home = () => {
//   return (
//     <section className="home" id="home">
//       <div className="home-content">
//         <h1>Welcome to the Blood Donation Platform</h1>
//         <p>
//           Connecting donors with organisations and people in need of blood. Join us to make a life-saving difference.
//         </p>
//         <div className="cta-buttons">
//           <Link to="register" smooth={true} className="cta-button">Register as a Donor</Link>
//           <Link to="search" smooth={true} className="cta-button">Find Blood Now</Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Welcome to the Blood Donation Platform</h1>
        <p>
          Connecting donors with organisations and people in need of blood. Join us to make a life-saving difference.
        </p>
        <div className="cta-buttons">
          <Link to="/register/donor" className="cta-button">Register as a Donor</Link>
          <Link to = "/register/organization" className="cta-button">Register as Organization</Link>
          <Link to="/find-blood" className="cta-button">Find Blood Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
