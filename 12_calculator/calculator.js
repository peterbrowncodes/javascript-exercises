const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	const total = args.reduce((accumulator, currentElement) =>
    accumulator + currentElement, 0);
  return total;
};

const multiply = function(a) {
  return a.reduce((acc, current) => acc * current, 1)
};

const power = function(a, b) {
	let total = 1;
  for (i = 0; i < b; i++) {
    total *= a
  };
  return total;
};

const factorial = function(a) {
	let total = 1;
  for (i = 1; i <= a; i++) {
    total *= i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
