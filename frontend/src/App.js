import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
          <TextField
            id="loanAmt"
            label="Loan Amount"
            name="loanAmt"
            // className={classes.textField}
            value={this.state.mortgageDetails.loanAmt}
            onChange={this.onInputChanged}
            margin="normal"
          />
          
          <TextField
            id="interest"
            label="Interest Rate"
            name="interest"
            // className={classes.textField}
            value={this.state.mortgageDetails.interest}
            onChange={this.onInputChanged}
            margin="normal"
          />

          <TextField
            id="amortPeriod"
            label="Amortization Period"
            name="amortPeriod"
            // className={classes.textField}
            value={this.state.mortgageDetails.amortPeriod}
            onChange={this.onInputChanged}
            margin="normal"
          />
          <Typography variant="h3">
            You will pay {mortgagePayment}
          </Typography>
        </div>
        <div className="rent-inputs">
          <TextField
            id="rentTotal"
            label="Monthly Rent"
            name="rentTotal"
            // className={classes.textField}
            value={this.state.rentTotal}
            onChange={this.onRentChanged}
            margin="normal"
          />

          <TextField
            id="investReturn"
            label="Expected investment return"
            name="investReturn"
            // className={classes.textField}
            value={this.state.investReturn}
            onChange={this.onRentChanged}
            margin="normal"
          />
          <Typography variant="h3">
            You could save {monthlySavings}
          </Typography>
          <Typography variant="h3">
          You could receive {MortgageService.calculateTotalReturn(monthlySavings, this.state.investReturn, this.state.mortgageDetails.amortPeriod)}
          </Typography>
        </div>
      </div>
    );
  }
}

export default App;
