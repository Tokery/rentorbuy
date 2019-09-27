import Utility from './utility';

class MortgageService {
    static calculateMonthlyPayment(loanAmt, annualInterest, amortPeriod) {
        const monthlyInterest = annualInterest / 12;
        const totalMonths = amortPeriod * 12;
        const powered = Math.pow((1+monthlyInterest), totalMonths);
        const amount = (loanAmt * monthlyInterest) / (1 - 1/powered);
        return amount;
    }

    static calculateInvestableAmount(monthlyMortgage, monthlyRent) {
        return monthlyMortgage - monthlyRent;
    }

    static calculateTotalReturn(monthlyInvested, annualReturn, yearsInvested) {
        // Calculates returns assuming annual compounding
        // Essentially calcuating the future value of an annuity
        monthlyInvested = Utility.convertToNumber(monthlyInvested);
        annualReturn = Utility.convertToNumber(annualReturn);
        yearsInvested = Utility.convertToNumber(yearsInvested);
        
        return (monthlyInvested * 12) * ((Math.pow(1 + annualReturn, yearsInvested) - 1) / annualReturn);
    }
};

export default MortgageService;