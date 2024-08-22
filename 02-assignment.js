// Difference between ==  and === comparison operators in js

// == makes assumptions such as null and undefined are the same, 
// === is strict i.e. no assumptions

console.log(null == undefined);
console.log(null === undefined);
const numbers = "123"
const numbersAgain = 123
console.log(numbers == numbersAgain); // true -- type coercion
console.log(numbers === numbersAgain); // false
// === is recomended always


// Variable Scope in javascript -- global, block, function

// Difference between normal functions and arrow functions  (syntax) 