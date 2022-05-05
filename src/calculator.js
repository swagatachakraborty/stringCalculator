const add = function (strNumbers = "") {
  return stringToNumbers(strNumbers).reduce((init, n) => init + n, 0);
};

const stringToNumbers = function (str) {
  return str
    .split(",")
    .flatMap((x) => x.split("\n"))
    .map(Number);
};

module.exports = add;
