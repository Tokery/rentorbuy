import React from 'react';
import MortgageService from './mortgageService';


class App {
  constructor() {
    this.state = {}
  }

  onInputChanged() {
    
  }

  render() {
    return (
      <div className="App">
        <div className="mortgage-inputs">
          <label>
            Loan Amount
          </label>
          <input type="text"/>
          <label>
            Annual Interest
          </label>
          <input type="text"/>
          <label>
            Amortization period
          </label>
          <input type="text"/>
        </div>
      </div>
    );
  }
}

export default App;
