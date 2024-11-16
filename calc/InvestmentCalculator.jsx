// src/InvestmentCalculator.js
import React, { useState } from 'react';

 // Import the utility functions
import UserInput from './src/UserInput';
import ResultInvestment from './src/ResultInvestment';

function InvestmentCalculator() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    years: 10
  });

  const handleChange = (key, value) => {//handlechange('intialinvestment',1000000);//handlechange('inte)
    setInvestmentData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };



  return (
    <div>
      <header id="header">
        <img src="./src/assets/investment-calculator-logo.png" alt="Logo" />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput
        investmentData={investmentData}
        handleChange={handleChange}
      />
      <ResultInvestment
        
        investmentData={investmentData}
      />
    </div>
  );
}

export default InvestmentCalculator;
