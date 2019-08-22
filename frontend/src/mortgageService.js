class MortgageService {
    static calculateMonthlyPayment(loanAmt, annualInterest, amortPeriod) {
        const monthlyInterest = annualInterest / 12;
        const totalMonths = amortPeriod * 12;
        const powered = Math.pow((1+monthlyInterest), totalMonths);
        const amount = (loanAmt * monthlyInterest) / (1 - 1/powered);
        // amount = loanAmt / ( (1 / annualInterest) * (1 - 1/Math.pow((1+annualInterest), amortPeriod)));
        return amount;
    }
};

export default MortgageService;