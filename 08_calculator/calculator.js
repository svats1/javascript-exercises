const add = function(a,b) {
  return parseInt(a) + parseInt(b)
};

const subtract = function(a,b) {
	return parseInt(a) - parseInt(b)
};

const sum = function(a) {
	let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += parseInt(a[i])
  }
  return sum
};

const multiply = function(a) {
  let prod = 1;
  for (let i = 0; i < a.length; i++) {
    prod *= parseInt(a[i])
  }
  return prod
};

const power = function(a,b) {
  return Math.pow(parseInt(a), parseInt(b))
};

const factorial = function(a) {
	let fac = 1
  for (let i = parseInt(a); i > 0; i--) {
    fac *= i
  }
  return fac
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
