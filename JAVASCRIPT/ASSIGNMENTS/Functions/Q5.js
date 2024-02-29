function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const input1 = 5;
console.log(`Factorial of ${input1}: ${factorial(input1)}`);

const input2 = 0;
console.log(`Factorial of ${input2}: ${factorial(input2)}`);

const input3 = 7;
console.log(`Factorial of ${input3}: ${factorial(input3)}`);
