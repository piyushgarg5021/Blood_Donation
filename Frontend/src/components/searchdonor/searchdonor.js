import React, { useState } from 'react';
import './searchdonor.css';

const SearchDonor = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    blood_group: '',
    location: 'Jaipur'
  });

  const [results, setResults] = useState([]); // No initial hard-coded results

  const handleChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchCriteria);
    const handleSearch = async () => {
      const response = await fetch('http://localhost:5000/api/users/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchCriteria),
      });
      const result = await response.json();
      console.log(result.donors);
      setResults(result.donors);
    };
    handleSearch();

    // Example search functionality to be replaced with actual API call or database fetch
    // setResults(fetchedResultsFromAPI);
  };

  return (
    <section className="search-donor" id="search-donor">
      <h2>Search for a Donor</h2>
      <form onSubmit={handleSearch} className="search-form">
        <label>Blood Group:</label>
        <select
          name="blood_group"
          value={searchCriteria.blood_group}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
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
        <select name="location" value={searchCriteria.location} onChange={handleChange}>
          <option value="Jaipur">Jaipur</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.name}</h3>
              <p>Blood Group: {result.blood_group}</p>
              {/* <p>Last Donated: {result.lastDonated}</p> */}
              <p>Contact: {result.contact}</p>
              <p>Location: {result.location}</p>
            </div>
          ))
        ) : (
          <p>No donors found for the selected criteria.</p>
        )}
      </div>
    </section>
  );
};

export default SearchDonor;
