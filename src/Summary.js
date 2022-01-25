import React from 'react';
import "./assets/style.css"

function toNumber(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Summary = ({ period, data })=> {
  return (
    <div className="SummaryContainer">
      <h2>SUMMARY</h2>
      <p>
        In {period} years, you will have Rs.{toNumber(data[data.length - 1].value)}
      </p>
      <h3>Breakdown</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">End of Year</th> 
            <th scope="col">Value</th>
          </tr>
        </thead> 
        <tbody>
          {data.map(({ label, value }) => (
            
            <tr key={label}>
              <td>{label}</td> 
              <td>Rs.{value.toFixed(2)}</td>
              
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
  );
}

export default Summary;
