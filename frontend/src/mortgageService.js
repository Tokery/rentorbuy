class MortgageService {
    static calculateMonthlyPayment(loanAmt, annualInterest, amortPeriod) {
        const monthlyInterest = annualInterest / 12;
        const totalMonths = amortPeriod * 12;
        const amount = loanAmt / ( (1 / monthlyInterest) * (1 - 1/Math.pow((1+annualInterest), totalMonths)));
        return amount;
    }
};

export default MortgageService;