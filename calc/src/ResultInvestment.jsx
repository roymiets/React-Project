import React from 'react';
import { calculateInvestmentResults, formatter } from './util/investment'; // Import the utility functions

function ResultInvestment({ investmentData }) {
  const results = calculateInvestmentResults({
    initialInvestment: investmentData.initialInvestment,
    annualInvestment: investmentData.annualInvestment,
    expectedReturn: investmentData.expectedReturn,
    duration: investmentData.years,
  });

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.valueEndOfYear - investmentData.initialInvestment - investmentData.annualInvestment * result.year)}</td>
              <td>{formatter.format(investmentData.initialInvestment + investmentData.annualInvestment * result.year)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultInvestment;
