// src/UserInput.js
import React from 'react';

function UserInput({ investmentData, handleChange }) {
    return (
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment:</label>
            <input
              type="number"
              value={investmentData.initialInvestment}
              onChange={(e) => handleChange('initialInvestment', Number(e.target.value))}
            />
          </div>
          <div>
            <label>Annual Investment:</label>
            <input
              type="number"
              value={investmentData.annualInvestment}
              onChange={(e) => handleChange('annualInvestment', Number(e.target.value))}
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return (%):</label>
            <input
              type="number"
              value={investmentData.expectedReturn}
              onChange={(e) => handleChange('expectedReturn', Number(e.target.value))}
            />
          </div>
          <div>
            <label>Years:</label>
            <input
              type="number"
              value={investmentData.years}
              onChange={(e) => handleChange('years', Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
  }
  
export default UserInput;
