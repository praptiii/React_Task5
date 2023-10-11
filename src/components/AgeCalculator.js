import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const selectedDate = new Date(birthDate);

    if (isNaN(selectedDate)) {
      setAge(null);
      return;
    }

    let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < selectedDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const handleInputChange = (event) => {
    setBirthDate(event.target.value);
  };

  return (
    <div className="age-calculator-container">
      <h1>Age Calculator</h1>
      <h2>Enter Your Date of Birth</h2>
      <input type="date" value={birthDate} onChange={handleInputChange} />

      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>

      {age !== null && (
        <p className="age-result">
          Your age is <span className="age-bold">{age} years</span> old.
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;