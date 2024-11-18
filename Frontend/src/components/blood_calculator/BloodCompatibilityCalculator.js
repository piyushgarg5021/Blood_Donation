import React, { useState } from 'react';
import './BloodCompatibilityCalculator.css'; // Optional styling

const BloodCompatibilityCalculator = () => {
  const [recipientType, setRecipientType] = useState('');
  const [result, setResult] = useState([]);

  const compatibilityData = {
    "O-": ["O-"],
    "O+": ["O+", "O-"],
    "A-": ["A-", "O-"],
    "A+": ["A+", "A-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "AB-": ["AB-", "A-", "B-", "O-"],
    "AB+": ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"], // Universal recipient
  };

  const calculateCompatibility = () => {
    if (recipientType && compatibilityData[recipientType]) {
      setResult(compatibilityData[recipientType]);
    } else {
      setResult([]);
    }
  };

  return (
    <div className="blood-calculator">
      <h2>Blood Type Compatibility Calculator</h2>
      <label htmlFor="blood-type">Select Recipient Blood Type:</label>
      <select
        id="blood-type"
        value={recipientType}
        onChange={(e) => setRecipientType(e.target.value)}
      >
        <option value="">--Select--</option>
        {Object.keys(compatibilityData).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={calculateCompatibility} className="calculate-button">
        Check Compatibility
      </button>

      {result.length > 0 && (
        <div className="result">
          <h3>Compatible Donor Blood Types:</h3>
          <ul>
            {result.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BloodCompatibilityCalculator;
