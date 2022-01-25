import React from "react"; 
import "./assets/style.css"

const defaultState = {
  initialAmount: 4000,
  period: 10,
  growthRate: 5,
  monthlyContribution: 100
};

function VariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, growthRate, monthlyContribution } = state;

  return (
    <section>
      <h2>Financials</h2>
      <div className="formContainer">
        <label className="inputBox" htmlFor="initialAmount">
          Initial Amount(Rs.) 
          <br/> <br/> 
          <div class="inputFlex">
            <input
              type="range"
              id="initialAmount"
              name="initialAmount"
              min="1000"
              max="20000"
              step="500"
              width="200px"
              class="slider"
              value={initialAmount}
              onChange={({ target }) => setState({ ...state, initialAmount: Number(target.value) })}
            />
            <input
              class="inputDisplay"
              type="number"
              id="initialAmount"
              name="initialAmount"
              value={initialAmount}
              onChange={({ target }) => setState({ ...state, initialAmount: Number(target.value) })}
            /> 
          </div> 
          
        </label>
        
        <label className="inputBox" htmlFor="period">
          Investment Period (Years) 
          <br/> <br/>  
          <div className="inputFlex">
            <input
              class="slider"
              type="range"
              min="1"
              max="20"
              id="period"
              name="period"
              width="200px"
              value={period}
              onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
            />
            <input
              class="inputDisplay"
              type="number"
              id="period"
              name="period"
              value={period}
              onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
            />
          </div>
          
        </label>
        
        <label className="inputBox" htmlFor="growthRate">
          Annual Growth Rate (%)
          <br/> <br/> 
          <div className="inputFlex">
            <input
              class="slider"
              type="range"
              min="3"
              max="20"
              step="0.1"
              id="growthRate"
              name="growthRate"
              width="200px"
              value={growthRate}
              onChange={({ target }) => setState({ ...state, growthRate: Number(target.value) })}
            />
            <input
              class="inputDisplay"
              type="number"
              id="growthRate"
              name="growthRate"
              value={growthRate}
              onChange={({ target }) => setState({ ...state, growthRate: Number(target.value) })}
            /> 
          </div>
          
        </label>
        
        <label className="inputBox" htmlFor="monthlyContribution">
          Monthly Contribution (Rs.) 
          <br/> <br/> 
          <div className="inputFlex">
          <input
            type="range"
            id="monthlyContribution"
            min="100"
            max="10000"
            step="100"
            width="200px"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
            class="slider"
          />
            <input
            class="inputDisplay"
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
          />
          </div>
          
        </label>
        
      </div>
      <button class="submitButton" type="button" onClick={() => onUpdate(state)}>
        Update Chart
      </button>
    </section>
  );
}

export default VariablesForm;
