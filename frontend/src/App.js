import React from 'react';
import MortgageService from './mortgageService';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mortgageDetails: {
        loanAmt: 300000,
        interest: 0.03,
        amortPeriod: 10,
      },
      rentTotal: 2000,
      investReturn: 0.05,
    };

    this.onInputChanged = this.onInputChanged.bind(this);
    this.onRentChanged = this.onRentChanged.bind(this);
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

  onRentChanged(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const mortgagePayment = MortgageService.calculateMonthlyPayment(this.state.mortgageDetails.loanAmt, this.state.mortgageDetails.interest, this.state.mortgageDetails.amortPeriod);
    const monthlySavings = MortgageService.calculateInvestableAmount(mortgagePayment, this.state.rentTotal);
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
          <h1>You will pay {mortgagePayment}</h1>
        </div>
        <div className="rent-inputs">
          <label>
            Rent amount
            <input name="rentTotal" type="text" value={this.state.rentTotal} onChange={this.onRentChanged} />
          </label>
          <label>
            Annual Investment Return
            <input name="investReturn" type="text" value={this.state.investReturn} onChange={this.onRentChanged} />
          </label>
          <h1>You could save {monthlySavings}</h1>
          <h1>You could receive {MortgageService.calculateTotalReturn(monthlySavings, this.state.investReturn, this.state.mortgageDetails.amortPeriod)}</h1>
        </div>
      </div>
    );
  }
}

export default App;
