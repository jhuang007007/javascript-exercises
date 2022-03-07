const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

const sum = array => array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

const multiply = array => array.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

const power = (a, b) => a ** b;

const factorial = function(factor) {
  let total = 1;
  while (factor > 0) {
    total *= factor;
    factor -= 1;
  }
  return total;
} 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
