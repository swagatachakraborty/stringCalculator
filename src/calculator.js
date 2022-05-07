const { isEmpty, isNegetive, isWithinThousand } = require("./utils/utils");
const { NEW_LINE, DEFAULT_DEL } = require("./utils/consts");

const add = function (strInput) {
  if (isEmpty(strInput)) return 0;

  const { delStr, numStr } = separateDelsAndNums(strInput);
  const dels = parseDelimiters(delStr);
  const numbers = extractNumbers(numStr, dels);

  throwExceptionForNegetiveNumbers(numbers);
  return numbers
    .filter(isWithinThousand)
    .reduce((init, n) => init + n);
};

const separateDelsAndNums = function (inputString) {
  let delStr = DEFAULT_DEL, numStr = inputString;

  if (inputString.startsWith("//") && inputString.includes(NEW_LINE)) {
    const i = inputString.indexOf(NEW_LINE);
    delStr = inputString.substring(2, i);
    numStr = inputString.substring(i + 1);
  }

  return { delStr, numStr };
};

const parseDelimiters = function (dels) {
  return dels
    .split("]")
    .flatMap((x) => x.split("["))
    .filter((x) => !isEmpty(x));
};

const extractNumbers = function (inputStr, dels) {
  let str = inputStr;
  dels.forEach((d) => str = str.replaceAll(d, NEW_LINE))

  return str
    .split(NEW_LINE)
    .filter((s) => isNumber(inputStr, s))
    .map(Number);
};

const isNumber = function (str, s) {
  if (isEmpty(s) || isNaN(s)) {
    throw `Invalid Input : ${str}`;
  }
  return true;
};

const throwExceptionForNegetiveNumbers = function (numbers) {
  const negetives = numbers.filter(isNegetive);
  if (negetives.length) {
    throw `Negatives not allowed : ${negetives}`;
  }
};

module.exports = add;
