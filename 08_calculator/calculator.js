const add = function(num1, num2) {
  let result = num1 + num2;
  return result;	
};

const subtract = function(num1, num2) {
  let result = num1 - num2;
  return result;	
};

const sum = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;	
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  // recursion
	if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }

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
