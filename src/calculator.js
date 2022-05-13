const { isEmpty, isNegative, isWithinThousand, invalidInputError, negativeNumberError } = require("./utils/utils");
const { NEW_LINE, DEFAULT_DEL, DEL_SEPARATOR, DEL_INPUT_STARTER } = require("./utils/consts");

const add = function (strInput) {
  if (isEmpty(strInput)) return 0;

  const { delStr, numStr } = separateDelsAndNums(strInput);
  const dels = parseDelimiters(delStr);
  const numbers = extractNumbers(numStr, dels);

  throwExceptionForNegativeNumbers(numbers);
  return numbers
    .filter(isWithinThousand)
    .reduce((init, n) => init + n);
};

const separateDelsAndNums = function (inputString) {
  let delStr = DEFAULT_DEL, numStr = inputString;

  if (inputString.startsWith(DEL_INPUT_STARTER) && inputString.includes(NEW_LINE)) {
    const i = inputString.indexOf(NEW_LINE);
    delStr = inputString.substring(2, i);
    numStr = inputString.substring(i + 1);
  }

  return { delStr, numStr };
};

const parseDelimiters = function (dels) {
  return dels
    .split(DEL_SEPARATOR.start)
    .flatMap((x) => x.split(DEL_SEPARATOR.end))
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
    throw invalidInputError(str);
  }
  return true;
};

const throwExceptionForNegativeNumbers = function (numbers) {
  const negatives = numbers.filter(isNegative);
  if (negatives.length) {
    throw negativeNumberError(negatives);
  }
};

module.exports = add;
