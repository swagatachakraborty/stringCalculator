const add = function (strNumbers = "") {
  if (strNumbers === "") return 0;
  return stringToNumbers(strNumbers).reduce((init, n) => init + n, 0);
};

const stringToNumbers = function (str) {
  return str
    .split(",")
    .flatMap((x) => x.split("\n"))
    .filter(s => isNumber(str, s))
    .map(Number);
};

const isNumber = function (str, s) {
  if (s === "" || isNaN(s)) {
    throw `Invalid Input : ${str}`;
  }
  return true;
};

module.exports = add;
