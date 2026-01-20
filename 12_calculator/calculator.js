const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (nums) => (nums).reduce((sum, num) => sum + num, 0);
console.log(sum([1, 2, 3]));
// const multiply = (a, b) => a * b;
const multiply = nums => nums.reduce((product, num) => product * num);
console.log(multiply([1, 2, 3, 4]));
const power = (a, b) => a ** b;

const factorial = num => {
  let result = 1;
  if (num === 0) return result;
  if (num === 1) return result;

  while(num > 1) {
    result *= num;
    num--;
  }

  return result;
}

console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
