// CONVERTING A LIST OF *STRINGS* TO *NUMBERS*
// We'll use 'array.map(Number);' to do this.
// Array.map can take the *Number* constructor as an argument.

const stringNumbers = ['123', '4.45', 'abc', '10000'];

const numbers = stringNumbers.map(Number);

console.log(numbers);
// [123, 4.45, NaN, 10000]
