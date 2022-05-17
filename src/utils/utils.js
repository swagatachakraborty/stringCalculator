const isEmpty = (str) => str === "" || str === undefined;

const isNegative = (n) => n < 0;

const isWithinThousand = (n) => n <= 1000;

const invalidInputError = (str) => `Invalid Input : ${str}`;

const negativeNumberError = (negatives) => `Negatives not allowed : ${negatives}`;

const isEven = (n) => n % 2 === 0;

const sum = (a, b) => a + b;

module.exports = {isEmpty, isNegative, isWithinThousand, invalidInputError, negativeNumberError, isEven, sum};
