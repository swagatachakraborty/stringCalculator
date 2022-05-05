const add = function (strNumbers = "") {
  return strNumbers
    .split(",")
    .map(Number)
    .reduce((init, n) => init + n, 0);
};

module.exports = add;
