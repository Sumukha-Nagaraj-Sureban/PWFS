function calculateTax() {
    const lowIncomeRate = 0.1;
    const mediumIncomeRate = 0.15;
    const highIncomeRate = 0.2;

    return function(income) {
        if (income <= 50000) {
            return income * lowIncomeRate;
        } else if (income > 50000 && income <= 100000) {
            return income * mediumIncomeRate;
        } else {
            return income * highIncomeRate;
        }
    };
}

const taxCalculator = calculateTax();

const income1 = 40000;
console.log(`Tax for income $${income1}: $${taxCalculator(income1)}`);

const income2 = 75000;
console.log(`Tax for income $${income2}: $${taxCalculator(income2)}`);

const income3 = 120000;
console.log(`Tax for income $${income3}: $${taxCalculator(income3)}`);
