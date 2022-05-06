const add = function (strInput = "") {
  if (strInput === "") return 0;

  const { del, str } = extractDelimiterAndString(strInput);
  const numbers = stringToNumbers(str, del);

  throwExceptionForNegetiveNumbers(numbers);
  return numbers.reduce((init, n) => init + n);
};

const extractDelimiterAndString = function (inputString) {
  let del = ",", str = inputString;

  if (inputString.startsWith("//") && inputString.includes("\n")) {
    const i = inputString.indexOf("\n");
    del = inputString.substring(2, i);
    str = inputString.substring(i + 1);
  }

  return { del, str };
};

const stringToNumbers = function (str, del) {
  return str
    .split(del)
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
