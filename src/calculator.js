const add = function (strInput = "") {
  if (strInput === "") return 0;

  const { delStr, numStr } = separateDelsAndNums(strInput);
  const dels = parseDelimiters(delStr);
  const numbers = extractNumbers(numStr, dels);

  throwExceptionForNegetiveNumbers(numbers);
  return numbers
    .filter((n) => n <= 1000)
    .reduce((init, n) => init + n);
};

const separateDelsAndNums = function (inputString) {
  let delStr = ",", numStr = inputString;

  if (inputString.startsWith("//") && inputString.includes("\n")) {
    const i = inputString.indexOf("\n");
    delStr = inputString.substring(2, i);
    numStr = inputString.substring(i + 1);
  }

  return { delStr, numStr };
};

const parseDelimiters = function (dels) {
  return dels
    .split("]")
    .flatMap((x) => x.split("["))
    .filter((x) => x != "");
};

const extractNumbers = function (inputStr, dels) {
  let str = inputStr;
  dels.forEach((d) => str = str.replaceAll(d, "\n"))

  return str
    .split("\n")
    .filter((s) => isNumber(inputStr, s))
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
