import React from 'react';
import MortgageService from './mortgageService';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mortgageDetails: {
        loanAmt: 1,
        interest: 1,
        amortPeriod: 1,
      },
    };

    this.onInputChanged = this.onInputChanged.bind(this);
  }

  onInputChanged(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const newMortgageDetails = Object.assign(this.state.mortgageDetails, {[name]: value});
    this.setState({
      mortgageDetails: newMortgageDetails,
    })
  }


  render() {
    return (
      <div className="App">
        <div className="mortgage-inputs">
          <label>
            Loan Amount
            <input name="loanAmt" type="text" value={this.state.mortgageDetails.loanAmt} onChange={this.onInputChanged}/>
          </label>
          
          <label>
            Annual Interest
            <input name="interest" type="text" value={this.state.mortgageDetails.interest} onChange={this.onInputChanged}/>
          </label>
          <label>
            Amortization period
            <input name="amortPeriod" type="text" value={this.state.mortgageDetails.amortPeriod} onChange={this.onInputChanged}/>
          </label>
          {MortgageService.calculateMonthlyPayment(this.state.mortgageDetails.loanAmt, this.state.mortgageDetails.interest, this.state.mortgageDetails.amortPeriod)}
        </div>
      </div>
    );
  }
}

export default App;
