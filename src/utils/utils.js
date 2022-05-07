const isEmpty = (str) => str === "" || str === undefined;

const isNegetive = (n) => n < 0;

const isWithinThousand = (n) => n <= 1000;

module.exports = { isEmpty, isNegetive, isWithinThousand };
