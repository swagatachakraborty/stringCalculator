const add = function (strInput = "") {
  if (strInput === "") return 0;

  const numbers = stringToNumbers(strInput);
  throwExceptionForNegetiveNumbers(numbers);

  return numbers.reduce((init, n) => init + n);
};

const stringToNumbers = function (str) {
  return str
    .split(",")
    .flatMap((x) => x.split("\n"))
    .filter((s) => isNumber(str, s))
    .map(Number);
};

const isNumber = function (str, s) {
  if (s === "" || isNaN(s)) {
    throw `Invalid Input : ${str}`;
  }
  return true;
};

const throwExceptionForNegetiveNumbers = function (numbers) {
  const negetives = numbers.filter((n) => n < 0);
  if (negetives.length) {
    throw `Negatives not allowed : ${negetives}`;
  }
};

module.exports = add;
