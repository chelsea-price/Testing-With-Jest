function factorial(n) {
    if (n === 0 || n === 1) 
        return 1;
 
    else
        return n * factorial(n - 1);
}
 
const n = 5;
const result = factorial(n);
console.log(`The factorial of ${n} is ${result}`);

module.exports = { factorial };