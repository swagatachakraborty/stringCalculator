const add = function (strNumbers = "") {
  if (strNumbers === "") return 0;
  return stringToNumbers(strNumbers).reduce((init, n) => init + n, 0);
};

const stringToNumbers = function (str) {
  return str
    .split(",")
    .flatMap((x) => x.split("\n"))
    .filter(isNumber)
    .map(Number);
};

const isNumber = function (str) {
  if (str === "" || isNaN(str)) {
    throw "Invalid Input";
  }
  return true;
};

module.exports = add;
