// // // // import React, { useState } from 'react';
// // // // import './findBlood.css';

// // // // const FindBlood = () => {
// // // //   const [searchData, setSearchData] = useState({
// // // //     blood_group: '',
// // // //     location: 'Jaipur',
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setSearchData({ ...searchData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSearch = (e) => {
// // // //     e.preventDefault();
// // // //     console.log('Search Criteria:', searchData);

// // // //     // Call to API to find donors based on searchData
// // // //     const findDonors = async () => {
// // // //       const response = await fetch('http://localhost:5000/api/donors/find', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(searchData),
// // // //       });
// // // //       const result = await response.json();
// // // //       console.log(result.donors);
// // // //       // Here, you can set state to display results or handle as needed
// // // //     };
// // // //     findDonors();
// // // //   };

// // // //   return (
// // // //     <section className="find-blood">
// // // //       <div className="search-container">
// // // //         <h2 className="search-title">Find Blood</h2>
// // // //         <form onSubmit={handleSearch} className="find-blood-form">
// // // //           <label>Blood Group:</label>
// // // //           <select name="blood_group" value={searchData.blood_group} onChange={handleChange} required>
// // // //             <option value="" disabled>Select Blood Group</option>
// // // //             <option value="A+">A+</option>
// // // //             <option value="A-">A-</option>
// // // //             <option value="B+">B+</option>
// // // //             <option value="B-">B-</option>
// // // //             <option value="AB+">AB+</option>
// // // //             <option value="AB-">AB-</option>
// // // //             <option value="O+">O+</option>
// // // //             <option value="O-">O-</option>
// // // //           </select>

// // // //           <label>Location:</label>
// // // //           <select name="location" value={searchData.location} onChange={handleChange}>
// // // //             <option value="Jaipur">Jaipur</option>
// // // //             <option value="Delhi">Delhi</option>
// // // //             <option value="Mumbai">Mumbai</option>
// // // //           </select>

// // // //           <button type="submit" className="search-button">Find Donors</button>
// // // //         </form>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default FindBlood;



// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";


// // //   const FindBlood = () => {
// // //     const [bloodGroup, setBloodGroup] = useState("");
// // //     const [location, setLocation] = useState("");
// // //     const [donors, setDonors] = useState([]);
// // //     const navigate = useNavigate(); // Use useNavigate instead of useHistory
  

// // //   const handleSearch = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/users/search", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({ blood_group: bloodGroup, location: location }),
// // //       });
// // //       const data = await response.json();
// // //       if (data.message) {
// // //         setDonors(data.message);
// // //       } else {
// // //         alert("No donors found");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Find Blood Donors</h1>
// // //       <label>Blood Group</label>
// // //       <input
// // //         type="text"
// // //         value={bloodGroup}
// // //         onChange={(e) => setBloodGroup(e.target.value)}
// // //       />
// // //       <label>Location</label>
// // //       <input
// // //         type="text"
// // //         value={location}
// // //         onChange={(e) => setLocation(e.target.value)}
// // //       />
// // //       <button onClick={handleSearch}>Search</button>

// // //       <div>
// // //         {donors.length > 0 ? (
// // //           <ul>
// // //             {donors.map((donor, index) => (
// // //               <li key={index}>
// // //                 {donor.username} - {donor.blood_group} - {donor.location}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         ) : (
// // //           <p>No donors available</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FindBlood;


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const FindBlood = () => {
// //   const [bloodGroup, setBloodGroup] = useState("");
// //   const [location, setLocation] = useState("");
// //   const [donors, setDonors] = useState([]);
// //   const navigate = useNavigate();

// //   const handleSearch = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/users/search", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ blood_group: bloodGroup, location: location }),
// //       });
// //       const data = await response.json();
// //       if (data.message) {
// //         setDonors(data.message);
// //       } else {
// //         alert("No donors found");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Find Blood Donors</h1>
// //       <label>Blood Group</label>
// //       <input
// //         type="text"
// //         value={bloodGroup}
// //         onChange={(e) => setBloodGroup(e.target.value)}
// //       />
// //       <label>Location</label>
// //       <input
// //         type="text"
// //         value={location}
// //         onChange={(e) => setLocation(e.target.value)}
// //       />
// //       <button onClick={handleSearch}>Search</button>

// //       <div>
// //         {donors.length > 0 ? (
// //           <ul>
// //             {donors.map((donor, index) => (
// //               <li key={index}>
// //                 {donor.username} - {donor.blood_group} - {donor.location}
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No donors available</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FindBlood;


// import React, { useState } from "react";
// import "./findBlood.css"; // Import the CSS file

// const FindBlood = () => {
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [location, setLocation] = useState("");
//   const [donors, setDonors] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/users/search", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ blood_group: bloodGroup, location: location }),
//       });
//       const data = await response.json();
//       if (data.message) {
//         setDonors(data.message);
//       } else {
//         alert("No donors found");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <section className="find-blood">
//       <div className="search-container">
//         <h2 className="search-title">Find Blood Donors</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="find-blood-form">
//           <label>Blood Group:</label>
//           <select
//             name="blood_group"
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//             required
//           >
//             <option value="" disabled>Select Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>

//           <label>Location:</label>
//           <select
//             name="location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="Jaipur">Jaipur</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Mumbai">Mumbai</option>
//           </select>

//           <button type="button" onClick={handleSearch} className="search-button">
//             Find Donors
//           </button>
//         </form>

//         {donors.length > 0 && (
//           <ul>
//             {donors.map((donor, index) => (
//               <li key={index}>
//                 {donor.username} - {donor.blood_group} - {donor.location}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FindBlood;


import React, { useState } from "react";
import "./findBlood.css";

const FindBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("Jaipur"); // default location
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const response = await fetch("http://localhost:5000/api/users/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ blood_group: bloodGroup, location: location }),
        });
        const data = await response.json();
        
        if (data.success) {
            setDonors(data.donors);
        } else {
            alert(data.message || "No donors found");
            setDonors([]);
        }
    } catch (error) {
        console.error("Error fetching donors:", error);
    } finally {
        setIsLoading(false);
    }
};


  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch("http://localhost:5000/api/users/search", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ blood_group: bloodGroup, location: location }),
  //     });
  //     const data = await response.json();
      
  //     if (data && data.message && data.message.length > 0) {
  //       setDonors(data.message);
  //     } else {
  //       alert("No donors found");
  //       setDonors([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching donors:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <section className="find-blood">
      <div className="search-container">
        <h2 className="search-title">Find Blood</h2>
        <form onSubmit={handleSearch} className="find-blood-form">
          <label>Blood Group:</label>
          <select
            name="blood_group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
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

          <label>Location:</label>
          <select
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <button type="submit" className="search-button">
            {isLoading ? "Searching..." : "Find Donors"}
          </button>
        </form>

        <div>
          {donors.length > 0 ? (
            <ul className="donorsList">
              {donors.map((donor, index) => (
                <li key={index}>
                  {donor.username} - {donor.blood_group} - {donor.location}
                </li>
              ))}
            </ul>
          ) : (
            !isLoading && <p>No donors available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindBlood;
