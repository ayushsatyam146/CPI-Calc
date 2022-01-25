import React from 'react'; 

import VariableForm from './VariableForm';
import CompoundInterestChart from './CompoundInterestChart'; 
import "./assets/style.css"

const defaultState = {
  initialAmount: 4000,
  period: 10,
  growthRate: 5,
  monthlyContribution: 100
};


const App = ()=> {
    const [state, setState] = React.useState(defaultState);
  
    return (
      <div className="wrapper">
        <div className="Appcontainer">
          <div className="top-child">
            <h1 className="text-center" ><b>Annual Compound Interest Calculator</b></h1> 
          </div>
          <div className="bottom-child">
            <div className="annualCompoundCalculator">
              <div className="left-child">
                
                <VariableForm onUpdate={variables => setState(variables)} />
                <br/><br/>
              </div>
              <div class="right-child">
                <CompoundInterestChart {...state} />  
              </div> 
            </div> 
          </div>
        </div>
      </div>
      
    );
}


export default App;